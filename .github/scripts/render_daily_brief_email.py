#!/usr/bin/env python3
"""Render the Daily D2C Report as an HTML email.

The brief is dense with tables. Mailed as plain text they collapse into pipe soup, so the numbers
have to be rendered as real <table>s — this is a report you read on a phone at 7am, and it has to be
legible in three seconds.

Everything below "<!-- APPENDIX — not emailed -->" is cut: Meet and Riya read this to know what
happened, not to audit how the agent computed it. The full brief still rides along as an attachment.

Deltas are coloured by direction, not by sign: for spend and returns, up is bad. Prints the rendered
HTML to stdout. Exits 2 if the brief is a stub, so the workflow can skip sending junk.
"""
import html
import re
import sys

APPENDIX = "<!-- APPENDIX"

INK = "#12161B"
MUTED = "#6B757F"
LINE = "#D8DCE0"
ACCENT = "#2F5D8C"
POS = "#10725A"
NEG = "#B33A2B"
WARN = "#8A6100"
SURF = "#F6F7F8"

SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"

# Metrics where an increase is a bad thing. Everything else: up is good.
INVERTED = ("spend", "returns", "cpp", "cpc", "cost")


def delta_colour(cell: str, row_label: str) -> str:
    """Colour a delta cell by what it means, not by its sign.

    +27% net sales is green. +27% spend is not. The agent writes the sign; we decide what it means
    from the row it sits in.
    """
    s = cell.strip()
    if not re.match(r"^[+\-−]", s):
        return MUTED
    rising = s[0] == "+"
    if any(k in row_label.lower() for k in INVERTED):
        rising = not rising
    return POS if rising else NEG


def inline(s: str) -> str:
    s = html.escape(s)
    s = re.sub(r"\*\*(.+?)\*\*", rf'<strong style="color:{INK}">\1</strong>', s)
    s = re.sub(r"\*(.+?)\*", r"<em>\1</em>", s)
    s = re.sub(r"`(.+?)`", rf'<code style="font-family:{MONO};font-size:12px">\1</code>', s)
    return s


def render_table(rows: list[list[str]]) -> str:
    """rows[0] is the header. rows[1] is the markdown |---| separator, already stripped by caller."""
    head, body = rows[0], rows[1:]

    th = "".join(
        f'<th style="text-align:{"left" if i == 0 else "right"};padding:7px 10px;'
        f"font:600 10px/1.4 {SANS};letter-spacing:.06em;text-transform:uppercase;"
        f'color:{MUTED};border-bottom:1px solid {LINE};white-space:nowrap">{inline(c)}</th>'
        for i, c in enumerate(head)
    )

    trs = []
    for r in body:
        label = r[0] if r else ""
        # A row whose first cell is bolded is a total/blended row — give it a rule above.
        total = label.strip().startswith("**")
        top = f"border-top:2px solid {INK};" if total else ""
        weight = "600" if total else "400"

        tds = []
        for i, c in enumerate(r):
            align = "left" if i == 0 else "right"
            colour = INK
            fw = weight
            if i == 0:
                fw = "600"
            elif re.match(r"^[+\-−]", c.strip()):
                colour = delta_colour(c, label)
                fw = "600"
            tds.append(
                f'<td style="text-align:{align};padding:7px 10px;{top}'
                f"border-bottom:1px solid {LINE};font:{fw} 13px/1.5 {MONO};"
                f'font-variant-numeric:tabular-nums;color:{colour};white-space:nowrap">{inline(c)}</td>'
            )
        trs.append(f"<tr>{''.join(tds)}</tr>")

    return (
        '<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:10px 0 18px">'
        '<table style="border-collapse:collapse;width:100%;min-width:520px">'
        f"<thead><tr>{th}</tr></thead><tbody>{''.join(trs)}</tbody></table></div>"
    )


def main() -> None:
    raw = open(sys.argv[1], encoding="utf-8").read()

    if len(raw) < 400:
        sys.exit(2)  # stub commit — workflow skips the send

    body = re.split(APPENDIX, raw, maxsplit=1)[0]
    # Belt and braces: if the agent forgot the marker, still cut the working notes.
    body = re.split(r"^##\s+How this brief was computed", body, maxsplit=1, flags=re.M)[0]

    out: list[str] = []
    table: list[list[str]] = []

    def flush() -> None:
        if table:
            out.append(render_table(table))
            table.clear()

    for line in body.splitlines():
        s = line.strip()

        if s.startswith("|"):
            cells = [c.strip() for c in s.strip("|").split("|")]
            if all(re.fullmatch(r":?-{2,}:?", c) for c in cells if c):
                continue  # the |---| separator
            table.append(cells)
            continue

        flush()

        if not s:
            continue

        if s.startswith("# "):
            continue  # the subject line already carries the title

        if s.startswith("## "):
            out.append(
                f'<h2 style="margin:30px 0 2px;padding-top:16px;border-top:1px solid {LINE};'
                f'font:600 15px/1.35 {SANS};color:{INK}">{inline(s[3:])}</h2>'
            )
        elif s.startswith("> "):  # the PARTIAL warning banner
            out.append(
                f'<div style="margin:14px 0;padding:11px 14px;background:#FBF3E2;'
                f'border-left:3px solid {WARN};border-radius:4px;'
                f'font:600 13px/1.5 {SANS};color:{WARN}">{inline(s[2:])}</div>'
            )
        elif s.startswith("→"):  # the one action
            out.append(
                f'<div style="margin:16px 0 4px;padding:14px 16px;background:#EAF0F7;'
                f'border-left:3px solid {ACCENT};border-radius:4px;'
                f'font:600 14px/1.55 {SANS};color:{INK}">{inline(s)}</div>'
            )
        else:
            out.append(
                f'<p style="margin:7px 0;font:14px/1.65 {SANS};color:#39424C">{inline(s)}</p>'
            )

    flush()

    print(
        f'<div style="max-width:680px;margin:0 auto;padding:6px 14px 28px;background:#fff">'
        + "".join(out)
        + f'<p style="margin:30px 0 0;padding-top:14px;border-top:1px solid {LINE};'
        f'font:12px/1.6 {SANS};color:#9CA3AF">'
        "Read-only — no live system was touched. Blended ROAS is MER (net sales ÷ ad spend); "
        "returns % is a 7-day rolling rate. Sources: Windsor.ai — Meta, Google Ads, GA4, Shopify. "
        "Full working attached."
        "</p></div>"
    )


if __name__ == "__main__":
    main()
