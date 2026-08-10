# AMAZON — Learning Log

> The department's institutional memory. Every cycle (and after every campaign/initiative) append an entry. This is what makes the agent auto-learning: it reprioritizes `tracker.md` and its skills based on confirmed/rejected hypotheses logged here. Never delete entries — supersede them.
>
> The weekly `/deep-loop` writes here. The daily `/standup` reads here (so learnings cross-pollinate across departments).

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed / rejected / inconclusive) | LEARNING CARRIED FORWARD
```
Be specific and quantified. A learning that can't change a future decision isn't a learning.

---

## CONFIRMED PATTERNS (promote proven learnings here)
- *(none yet — department opened 2026-07-08)*

## REJECTED / DEAD ENDS (don't retry these)
- *(none yet)*

---

## CYCLE LOG (most recent first)

### 2026-08-10 — Amazon Ads Operator: pivoted off MCP onto direct API, credentials obtained
**Initiative:** Continued standing up the Amazon Ads Operator (see 2026-08-04 entry). The Amazon Ads
MCP Server open-beta enrollment (requested via ads-api-onboarding@amazon.com) remained stuck with no
ETA. In parallel, Meet completed the standard Amazon Ads API developer path end-to-end: created an
LWA security profile ("NG EarSafe Ads Operator"), got Client ID + Secret, applied for and received
API access approval, completed the self-service "Assign API access" step (scopes granted:
`advertising::campaign_management` + defaults), then ran the OAuth browser-consent flow to get a
refresh token, and confirmed both target profiles via a live `GET /v2/profiles` call.
**Decision:** Rather than keep the agent blocked on the MCP beta indefinitely, pivot it to call the
Amazon Ads API directly — the identical pattern already used for Google Ads/GA4 in this company.
Rewrote `Company_OS/agents/amazon-ads.agent.yaml` accordingly (removed the MCP server/tool block,
added a direct-HTTP "HOW TO REACH THE AMAZON ADS API" section).
**Result (verified facts, 2026-08-10):**
- Client ID: `amzn1.application-oa2-client.8f08f0a0327f4e5cafc1352eba291842`.
- Token host `api.amazon.com/auth/o2/token` and Ads API host `advertising-api-eu.amazon.com`
  (India routes through Amazon's "EU" region, not the NA default) both confirmed live.
- Profiles confirmed: NG Corporation (Seller/SC) `1452172411967063`, NG AMS (Vendor/VC)
  `1498424255518113` — both match accounts already tracked via Windsor. Two dormant UK profiles
  (`2740568026023278`, `4460904763365323`, both `validPaymentMethod: false`) exist but are out of
  scope.
- Refresh token obtained and saved locally by Meet — not yet in the deployment vault.
- **Not yet verified:** the actual Reporting API (v3, async request/poll/download) call shape —
  report-type IDs and column names in the agent's system prompt are a documented best-guess, to be
  confirmed on the first live pull.
**Learning carried forward:** (1) Don't let a agent-yaml design stay blocked on an external beta with
no ETA when a working direct-API path exists — mirrors the Google Ads/GA4 precedent exactly. (2) A
direct HTTP-calling agent has no tool-grant wall the way an MCP-toolset-based agent does — the "never
call anything but GET + the report-request POST" rule lives in the system prompt only, an accepted
tradeoff already documented for Google Ads. (3) Amazon's OAuth screens rotate through several
differently-named consoles (Jira ticket → redirected to email → separate self-service "Assign API
access" screen found via a docs link) — the self-service path turned out to be faster than the
support-ticket path for the core access grant; keep the support thread open only for anything truly
requiring a human (the MCP beta itself). (4) New policy, confirmed from Amazon's own docs: refresh
tokens issued on/after 2026-07-30 expire after 365 days — this one needs renewal by ~2027-08-10.
**Next-sprint change triggered:** tracker P0-0 (load secrets into vault, verify Reporting API shape
live, then `ant beta:agents create` + deploy) and P0-0b (calendar the 2027-08-10 token renewal).
**Skill signal:** —

### 2026-08-10 (later same day) — Amazon Ads Operator deployed live
**Initiative:** Completed the deployment: three secrets (`AMZADS_CLIENT_ID`, `AMZADS_CLIENT_SECRET`,
`AMZADS_REFRESH_TOKEN`) loaded into the `ng-earsafe-readonly` vault (egress-scoped to
`api.amazon.com`, body-injected), then `ant beta:agents create` and `ant beta:deployments create`
run directly from the committed `amazon-ads.agent.yaml` (parsed via a script, not retyped, to
guarantee the live agent matches the file exactly).
**Result:** LIVE. Agent `agent_018SLSmqeSjmt4Z9wtKMq6XK` (v1), deployment
`depl_015owH8KhHtxLayo6uRYM4r4`, weekly cron Wednesday 07:30 IST, first run 2026-08-12. Delivery
wired: `.github/workflows/email-amazon-ads.yml` emails Meet + Riya; `slack-notify.yml` posts to
`#amazon-ads` once that webhook secret is added. No CLI path exists to trigger an ad-hoc run
(`ant beta:deployment-runs` only supports `retrieve`/`list`) — the 2026-08-12 scheduled run is also
the first live test of the Reporting API call shape.
**Learning carried forward:** (1) During credential setup, a Client Secret fragment and a full
access+refresh token pair were accidentally pasted into the chat by copy-paste errors (terminal
prompt text merging with `curl` output that lacked a trailing newline). Handled by treating both as
burned and regenerating clean replacements rather than trying to salvage/parse a corrupted paste —
the right call whenever a secret partially leaks, even in a private channel. (2) A `read -s` shell
prompt or a `-o file` + a one-line `python3 -c "json.load(...)"` print avoids the corruption class
entirely (nothing gets displayed for a human to mis-select) — worth defaulting to this for any future
manual OAuth walkthroughs with a non-technical operator. (3) Vault credentials attach at the
**deployment** level (`--vault-id` on `ant beta:deployments create`), not the agent — the agent
resource itself has no credential/vault field. (4) `ant beta:vaults:credentials create --auth` schema
(discovered by deliberately probing 400 errors, which is safe — nothing is created until all
required fields are present): `{type, secret_name, secret_value, networking:{type,allowed_hosts},
injection_location:{body,header}}`; omitting `injection_location` defaults to `{body:true,
header:true}` rather than erroring, so set it explicitly to match the intended shape.
**Next-sprint change triggered:** tracker P0-0c (verify the Reporting API shape after the first run,
correct the agent.yaml if the guess was wrong, re-push + re-pin the deployment).
**Skill signal:** —

### 2026-08-04 — Amazon Ads Operator prepared (architecture decision, not yet deployed)
**Initiative:** Meet asked for a weekly Amazon Ads specialist agent connected via the official Amazon
Ads MCP (open beta), covering ROAS/optimization/hypothesis-testing/scale/cut/reallocate, floor 6.
**Decision:** Mirror the Meta Ads department's two-track split rather than folding this into the
existing interactive subagent. Wrote `Company_OS/agents/amazon-ads.agent.yaml` (version-controlled,
NOT deployed) as a weekly Managed Agent that will own SP/SB/SD campaign-level performance at a
**6.0 ad-attributed-ROAS floor** — a deliberately different metric from this department's existing
**blended ROAS ≥ 15** P&L mandate, which stays with this subagent. Updated `constitution.md` §0/§7/§8,
this subagent's own `.claude/agents/amazon.md` header, and both to cross-reference the split.
**Why not deployed today:** the Amazon Ads MCP server is a partner-gated open beta; NG has no Amazon
Ads API/MCP credentials (LWA client id/secret, refresh token, profile IDs) provisioned yet, and the
official docs page is JS-rendered — could not verify the exact server URL/auth shape without console
access. The spec ships with clear placeholders + a setup checklist rather than guessed values.
**Learning carried forward:** (1) A new ad-platform-specific ROAS floor of 6.0 keeps this company's
convention consistent — Google Ads and Meta Ads already hold the same 6.0 floor on their own channel-
attributed metric, distinct from any P&L-level bar. (2) Amazon's MCP server can create/update/delete
campaigns and touch billing per its own announcement — the tool grant in the agent.yaml stays
`enabled: false` until every mutation tool is individually identified and disabled; this is the
primary defense pattern used everywhere else in this repo, not a prompt instruction.
**Next-sprint change triggered:** tracker P0-0 (credential provisioning + deploy) — blocked on Meet
obtaining Amazon Ads API/MCP access outside this session.
**Skill signal:** —

### 2026-07-08 — First ads audit (same day as founding)
**Initiative:** Full campaign-level audit, 30d window (8 Jun–7 Jul), both accounts, once Windsor `amazon_ads` sync landed (~2h after connect).
**Hypothesis:** Being tested via AZ-001..004 (queued).
**Result (baseline facts):**
- 30d SP spend ₹35,207 → ₹1,09,545 attributed sales (4.5× on matured basis). SB spend ₹0 (14 campaigns, zero impressions). SD ~nil (table still syncing; settlement cross-check ✓). NG AMS account (1498424255518113): 100% dark, all campaigns.
- **Blended ROAS ≈ 21** vs the 15 bar → headroom exists; the constraint is campaign quality, not the bar.
- Account concentration: "SP-Comm 9th April'26 | Generic" = 53% of spend, 77% of attributed sales — the only campaign that passed a spend test (wk3→wk4 +144% spend, ROAS in range, matures ~19 Jul).
- Clear bleed: "SafeBuds 3rd June Manual" — wks 2–3 fully matured at ₹0 sales on ₹4.6K spend (583 clicks → 5 conv). Clear miss: "SafeBuds 5th May" ran at 5.19× in wk1 then was defunded — the efficient SafeBuds campaign was cut while the bleeder kept spending, precisely while SafeBuds demand surged (+77% SC WoW).
**Learning carried forward:** (1) Read kill/scale ONLY on matured windows — wk4's 3.88 looks weak but isn't readable until ~19 Jul. (2) Settlement ServiceFee deductions cross-check Windsor ads spend within ~15% — good sanity rail. (3) The paradox to never repeat: hottest SKU ≠ funded campaign; check the mapping every cycle.
**Next-sprint change triggered:** tracker P0-1..3 closed; P0-4 (drive AZ-001..004 to decision) + P1-1 (search-term harvest, blocked on targeting-table sync) are the live edge.
**Skill signal:** —

### 2026-07-08 — Department founding baseline
**Initiative:** Amazon department scaffolded; Windsor `amazon_ads` connected (accts NG Corporation `1452172411967063`, NG AMS `1498424255518113`).
**Hypothesis (OPEN):** Amazon can scale from ~₹7.5L/mo run-rate to ₹35L/mo while holding blended ROAS ≥ 15 — because current ad intensity is tiny (settlement-implied ~₹9.5K/wk) against organically accelerating demand (SC +77% WoW, wk 1–7 Jul).
**Result:** too-early — first full ads pull pending (connector backfill running; all `amazon_ads` queries timed out on day 1 — expected for a fresh Windsor connector, not a break).
**Learning carried forward:**
1. Amazon Ads spend was invisible to the whole company until 2026-07-08 — the only prior trace was ~₹2,380 `ServiceFee` deductions in the SC settlement report every 1–3 days (probable ads threshold billing, unconfirmed). Settlement deductions ≠ accrual dates; never use them for week-over-week reads once real ads data exists.
2. Reporting lags are structural: SC ~1 day, VC ~3+ days, ads attribution 14-day. Kill/scale calls only on matured windows.
3. SC and VC revenue are different accounting bases — always label combined figures.
**Next-sprint change triggered:** tracker P0-1/2/3 (audit, baseline, classification) queued for the moment the sync lands.
**Skill signal:** —
