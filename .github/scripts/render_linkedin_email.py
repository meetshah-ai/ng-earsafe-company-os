#!/usr/bin/env python3
"""Render the LinkedIn cycle brief as an options-only HTML email.

Everything below the "<!-- APPENDIX — not emailed -->" marker is cut: Meet reads the email to decide
what to post, not to audit how the agent worked. The full brief still rides along as an attachment.

Each post body (a fenced code block in the brief) becomes a bordered, monospace box he can select and
paste straight into LinkedIn.
"""
import html
import re
import sys

APPENDIX = "<!-- APPENDIX"


def main() -> None:
    raw = open(sys.argv[1], encoding="utf-8").read()

    # Cut the appendix. If the agent forgot the marker, fall back to cutting at the research heading
    # rather than mailing the whole dump.
    body = re.split(APPENDIX, raw, maxsplit=1)[0]
    body = re.split(r"^##\s+How this cycle was worked", body, maxsplit=1, flags=re.M)[0]

    out: list[str] = []
    in_post = False
    post: list[str] = []

    def flush_post() -> None:
        if not post:
            return
        text = html.escape("\n".join(post).strip("\n"))
        out.append(
            '<div style="margin:14px 0;padding:16px 18px;background:#f6f8fa;border:1px solid #d7dde5;'
            'border-left:3px solid #0a66c2;border-radius:6px;white-space:pre-wrap;'
            'font:14px/1.65 -apple-system,Segoe UI,Roboto,sans-serif;color:#0b1f3a">'
            f"{text}</div>"
        )
        post.clear()

    for line in body.splitlines():
        if line.strip().startswith("```"):
            if in_post:
                flush_post()
                in_post = False
            else:
                in_post = True
            continue

        if in_post:
            post.append(line)
            continue

        s = line.strip()
        if not s:
            continue

        if s.startswith("## "):  # an option
            out.append(
                '<h2 style="margin:34px 0 4px;padding-top:20px;border-top:1px solid #e5e7eb;'
                'font:600 19px/1.3 -apple-system,Segoe UI,Roboto,sans-serif;color:#0b1f3a">'
                f"{inline(s[3:])}</h2>"
            )
        elif s.startswith("# "):  # the title — the subject line already says this
            continue
        elif s.startswith("> "):  # the hook
            out.append(
                '<div style="margin:8px 0;padding:12px 14px;background:#eef4fb;border-radius:6px;'
                'font:600 16px/1.45 -apple-system,Segoe UI,Roboto,sans-serif;color:#0a66c2">'
                f"{inline(s[2:])}</div>"
            )
        else:
            out.append(
                '<p style="margin:6px 0;font:14px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;'
                f'color:#334155">{inline(s)}</p>'
            )

    flush_post()

    print(
        '<div style="max-width:660px;margin:0 auto;padding:8px 4px 28px">'
        + "".join(out)
        + '<p style="margin:32px 0 0;padding-top:14px;border-top:1px solid #e5e7eb;'
        'font:12px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#9ca3af">'
        "Reply with the option you want and I'll log it. Do nothing and nothing posts — "
        "which is also a signal, and the next cycle reads it.<br>"
        "Written for your personal profile. The full working — research, audit, numbers — is attached."
        "</p></div>"
    )


def inline(s: str) -> str:
    s = html.escape(s)
    s = re.sub(r"\*\*(.+?)\*\*", r'<strong style="color:#0b1f3a">\1</strong>', s)
    s = re.sub(r"\*(.+?)\*", r"<em>\1</em>", s)
    return s


if __name__ == "__main__":
    main()
