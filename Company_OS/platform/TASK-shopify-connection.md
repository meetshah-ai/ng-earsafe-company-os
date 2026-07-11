# TASK — Connect the managed CoS agent to NG EarSafe Shopify data

**For:** a Claude cowork session (browser/computer-use + the claude.ai Shopify connector + repo access).
**Goal / definition of done:** the managed **Chief of Staff** agent (platform agent, not you) can pull
NG EarSafe website data — yesterday's **order count, net revenue, and SKU split** — during its own
sessions, with a credential that lives in the agent's vault. You are done when a fresh managed-agent
session returns those three numbers.

**Store:** `6b1880-3.myshopify.com` · public domain ngearsafe.com · Basic plan · INR · IST.

---

## The one hard constraint — read before you start, don't rediscover it

Minting a Shopify **Admin API access token** is a store-owner action in the Shopify admin UI.
**No API, no app, and no agent can create it** — Shopify does not let apps create apps or tokens.
So the single irreducible human step in this whole task is a person revealing one `shpat_…` string.
Everything *around* it — testing, verifying, wiring, writing the credential — you can do. Automate
all of that; escalate to the human **only** for the token reveal, and hand them the exact clicks.

Do **not** burn time on: the Shopify Partner/dev dashboard (`dev.shopify.com`, `partners.shopify.com`)
— that builds apps for *other* merchants and is the wrong tool; or the Windsor.ai Shopify App-Store
app — it is unlisted and a known dead end (Windsor's own forum documents it).

---

## Step 0 — Try the FREE paths first (you may not need a token at all)

Do both checks before asking the human for anything.

1. **Is Shopify already wired into Windsor?** The managed agent already reaches Windsor over MCP and
   it works. If Windsor has a live `shopify` connector for this account, the agent gets Shopify for
   free — no token, no new credential. Test it: call the Windsor MCP `get_data` (or the REST
   equivalent) with `connector="shopify"`, `date_from`/`date_to` = yesterday, asking for order count
   and net sales. **If it returns real data → skip to Step 3 (verify) and you are essentially done.**

2. **Does a Shopify credential already exist in the agent's vault?** List the vault's credentials
   (`ant beta:vaults:credentials list --vault-id <VAULT_ID> --transform '{display_name,type,url:auth.mcp_server_url,secret:auth.secret_name}'`).
   If a `SHOPIFY_ADMIN_TOKEN` env-var credential is already there and its `allowed_hosts` includes
   `6b1880-3.myshopify.com` → skip to Step 3.

If either check succeeds, you are done far faster than the token path. Only continue to Step 1 if both fail.

---

## Step 1 — Mint the Admin API token (human-gated; you prepare, human clicks)

Attempt to drive this yourself if you have a browser tool AND the human's Shopify session is logged in.
If you cannot click through the token reveal, produce a **precise handoff** (below) and stop there — do
not fabricate a token or claim success.

Exact path (store admin — NOT the dev dashboard):
1. `admin.shopify.com/store/6b1880-3` → **Settings** → **Apps and sales channels** → **Develop apps**.
2. If prompted, **Allow custom app development** (store-owner only, one-time). *If this button is
   absent, the logged-in account is not the store owner — escalate that fact; it is the real blocker.*
3. **Create an app**, name `ng-cos-readonly`.
4. **Configure Admin API scopes** → tick exactly: `read_orders`, `read_products`, `read_inventory`,
   `read_analytics`. Nothing with `write_`. (Read-only scopes are what make "the CoS cannot change the
   store" a fact about the token, not a promise in a prompt.) **Save.**
5. **Install app** → **API credentials** → reveal the **Admin API access token** (`shpat_…`).
   It is shown once. Capture it directly into Step 2 — never print it into the repo, a PR, or logs.

**Human-handoff message (use verbatim if you hit the token reveal and can't proceed):**
> I need one manual step I'm not able to do: in your Shopify admin at
> admin.shopify.com/store/6b1880-3 → Settings → Apps and sales channels → Develop apps →
> create app `ng-cos-readonly` with read-only scopes read_orders/read_products/read_inventory/
> read_analytics, install it, and paste me the Admin API access token (shpat_…). That's the only
> thing blocking the Shopify connection; everything else is ready.

---

## Step 2 — Wire the token into the agent's vault (privileged; may need the human or the ant CLI)

Add it as an **environment_variable** credential in the same vault the CoS sessions attach:

```
ant beta:vaults:credentials create --vault-id <VAULT_ID> \
  --display-name "Shopify Admin (read-only)" \
  --auth '{type: environment_variable, secret_name: SHOPIFY_ADMIN_TOKEN,
           secret_value: <shpat_…>, networking: {type: limited, allowed_hosts: ["6b1880-3.myshopify.com"]},
           injection_location: {header: true, body: false}}'
```

`injection_location` header-only matters: the token rides the `X-Shopify-Access-Token` header, so body
substitution would only widen exposure for no benefit. If you lack API-key scope to write the vault,
hand the human the token + this command and have them run it.

The managed agent's constitution (`Company_OS/platform/cos.agent.yaml`) is **already** written to curl
Shopify with `$SHOPIFY_ADMIN_TOKEN` against `6b1880-3.myshopify.com/admin/api/2026-07/graphql.json`.
No agent change is needed — do not add a Shopify MCP server; none exists for Admin data.

---

## Step 3 — Verify end to end (this is the definition of done)

Start a **fresh** managed CoS session (existing sessions are pinned to an older config), vault attached,
and have it run a read-only Shopify check via its own tools:
- confirm `$SHOPIFY_ADMIN_TOKEN` is present (non-empty),
- pull **yesterday's order count** and **net sales** (ShopifyQL `shopifyqlQuery` for aggregates),
- print a one-line SKU split.

If it returns real numbers with no `Host not in allowlist` and no empty-token error → **done**. Confirm
the environment networking allows `6b1880-3.myshopify.com` (unrestricted, or that host in the `limited`
allowlist) — a token that never leaves the sandbox because the host is blocked looks like a token bug.

---

## Fallbacks — if Step 1 is blocked (ranked)

1. **Windsor manual credentials.** In the Windsor dashboard, add the Shopify data source via the
   *API-credentials* flow (shop name + the custom app's API key/secret) rather than the missing
   App-Store app — Windsor documents this. Then Shopify data flows through the already-working Windsor
   MCP and no vault token is needed. Same custom app; different destination for its credentials.
2. **Ship without Shopify now.** Windsor + GitHub already work — that is every ROAS number, all channel
   spend/revenue, the full ads picture. The agent already degrades gracefully ("Shopify unavailable this
   run") and produces everything else. Prove the whole loop today; add Shopify as a five-minute follow-up.
3. **Interim bridge (last resort).** A claude.ai cowork session *does* have a working Shopify connector
   (Admin GraphQL). As a stopgap it can pull the daily Shopify figures and commit them to the repo for
   the managed agent to read — but this is a crutch, not the fix; it does not run on the schedule.

---

## Report back

State which path succeeded (Windsor-already-wired / existing-credential / new-token / fallback),
paste the three verified numbers, and name the single blocker if you stopped. **Never** put the token
in the report, a commit, a PR, or a log. Do not claim the connection works until Step 3 returned real data.
