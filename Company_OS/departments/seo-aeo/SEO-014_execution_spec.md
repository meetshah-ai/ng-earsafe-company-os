# SEO-014 — Execution Spec (exact strings)

> Approved by Meet 2026-07-20. Target: Shopify Article `gid://shopify/Article/751516680471`
> `/blogs/open-ear-headphones/best-noise-canceling-headset-for-working-from-home`
> Supersedes SEO-004 (rejected) and SEO-012 (folded in).
> **Read plan: D+30 = 2026-08-19** (position, CTR, impressions).

## Change 1 — H1 / article title  ✅ EXECUTE

Shopify field: `article.title` (renders as the page H1).

- **FROM:** `Best Noise-Canceling Microphone Headset for Working from Home`
- **TO:**   `Best Headset for Work From Home India 2026 — Open Ear vs Noise Cancelling`

Rationale: harmonizes H1 with the live `title_tag`, removing the title/H1 mismatch.
Brand suffix `| NG EarSafe` intentionally omitted from the H1 (title_tag only).

## Change 2 — title_tag  ❌ DO NOT TOUCH

`title_tag` stays: `Best Headset for Work From Home India 2026 — Open Ear vs Noise Cancelling | NG EarSafe`
Meet's decision 2026-07-20. SEO-004's 57-char overwrite is rejected.
Known accepted trade-off: 86 chars, truncates in SERP at ~60.

## Change 3 — description_tag  ❌ DO NOT TOUCH

Live meta is 159 chars and on-brand. SEO-012's "possibly generic" premise disproven.

## Change 4 — append 2 visible Q&As to the FAQs section  ✅ EXECUTE

Append after the existing Q4 `<p>` in `article.body`:

```html
<h3>5) Which headset is best for 6-hour Zoom days?</h3>
<p>For back-to-back call days, ear pressure and heat matter more than raw noise cancellation. Sealed in-ear tips and over-ear cups both build up pressure over a multi-hour stretch. An open-ear headset like the NG EarSafe Comm 2.0 sits outside the ear canal, so there is no in-canal pressure to fatigue you, and you can still hear the room without taking it off. Prioritise a boom mic for call clarity and a battery that clears a full workday without a mid-day charge.</p>
<h3>6) Do open-ear headsets work in a noisy Indian home office?</h3>
<p>Partly, and the trade-off is worth being honest about. Open-ear headsets do not seal your ear, so they will not mute construction or traffic noise the way sealed ANC cups do. What they do well is the half that decides whether a meeting works: a boom mic keeps your voice clean for the person on the call. If you need silence to concentrate, a sealed ANC headset is the better tool. If you need to stay aware of your home while sounding clear on calls, open ear is the better fit.</p>
```

## Change 5 — append 6-Q FAQPage JSON-LD  ✅ EXECUTE

All six questions are visible on-page after Change 4 (Google FAQ policy — the SEO-003/SEO-007 learning).
Answer text below matches the visible copy verbatim.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What makes a noise-canceling microphone headset suitable for work from home?","acceptedAnswer":{"@type":"Answer","text":"A good noise-canceling headset ensures clear communication by blocking ambient sounds, offering comfort for long hours, and compatibility with work devices."}},
    {"@type":"Question","name":"How does the NG EarSafe Comm compare to other headsets?","acceptedAnswer":{"@type":"Answer","text":"The NG EarSafe Comm stands out due to its open-ear design, noise-canceling boom mic, and lightweight comfort, making it perfect for work-from-home professionals."}},
    {"@type":"Question","name":"Is an open-ear headset better than traditional headsets?","acceptedAnswer":{"@type":"Answer","text":"Open-ear headsets like NG EarSafe Comm keep your ear canals unblocked, reducing risks of ear infections and ensuring better situational awareness."}},
    {"@type":"Question","name":"Are wireless headsets reliable for work purposes?","acceptedAnswer":{"@type":"Answer","text":"Yes, wireless headsets like NG EarSafe Comm offer reliable connectivity and flexibility, ensuring smooth communication even when moving around."}},
    {"@type":"Question","name":"Which headset is best for 6-hour Zoom days?","acceptedAnswer":{"@type":"Answer","text":"For back-to-back call days, ear pressure and heat matter more than raw noise cancellation. Sealed in-ear tips and over-ear cups both build up pressure over a multi-hour stretch. An open-ear headset like the NG EarSafe Comm 2.0 sits outside the ear canal, so there is no in-canal pressure to fatigue you, and you can still hear the room without taking it off. Prioritise a boom mic for call clarity and a battery that clears a full workday without a mid-day charge."}},
    {"@type":"Question","name":"Do open-ear headsets work in a noisy Indian home office?","acceptedAnswer":{"@type":"Answer","text":"Partly, and the trade-off is worth being honest about. Open-ear headsets do not seal your ear, so they will not mute construction or traffic noise the way sealed ANC cups do. What they do well is the half that decides whether a meeting works: a boom mic keeps your voice clean for the person on the call. If you need silence to concentrate, a sealed ANC headset is the better tool. If you need to stay aware of your home while sounding clear on calls, open ear is the better fit."}}
  ]
}
</script>
```

## Post-execution

1. Rich Results Test on the live URL — confirm FAQPage parses, 6 questions detected.
2. Verify H1 rendered and `title_tag` UNCHANGED (regression check — the title must not move).
3. Log to `learning-log.md`; set D+30 read for 2026-08-19.

## ⚠️ OPEN FLAG — raised 2026-07-20, not part of this execution

The `description_tag` promises *"The honest WFH headset comparison for Indian professionals — with
a clear pick for every use case."* The body delivers **no comparison**: no competitor is named, no
pricing appears, there is no use-case matrix, and every section pitches the NG EarSafe Comm. The
one genuinely comparative H2 ("Wireless vs Wired Headsets for Work") is two short paragraphs.

This content↔promise mismatch is a plausible relevance drag that is **larger than the H1 mismatch
SEO-014 fixes**, and it means SEO-014's hypothesis (harmonize → position returns to ≤5.0) may be
under-powered. Recommend a separate row for a genuine comparison section (NG vs Shokz OpenComm vs
a sealed ANC benchmark, with India pricing and a per-use-case pick). Do not fold it into SEO-014 —
keep the D+30 read clean on the H1 variable.
