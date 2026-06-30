#!/usr/bin/env bash
# NG EarSafe — observability logger.
# Reads a Claude Code hook event (JSON on stdin) and appends ONE normalized line
# to Company_OS/_observability/trace-YYYYMMDD.jsonl.
# It computes `gate` by the SAME rule as the approval gate in .claude/settings.json,
# so the trace records whether a mutation attempt was blocked — even though the gate
# itself is a separate hook. ALWAYS exits 0: it must never interfere with the gate.
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$DIR/trace-$(date +%Y%m%d).jsonl"
INPUT="$(cat)"   # capture the hook event JSON from stdin (heredoc would otherwise steal stdin)
HOOK_JSON="$INPUT" OUT_FILE="$OUT" python3 -c '
import os, json, re, datetime
out = os.environ.get("OUT_FILE","")
try:
    data = json.loads(os.environ.get("HOOK_JSON") or "{}")
except Exception:
    data = {}
event  = data.get("hook_event_name") or "unknown"
tool   = data.get("tool_name") or ""
ti     = data.get("tool_input") or {}
target = ""
if isinstance(ti, dict):
    for k in ("file_path","path","pattern","command","query","prompt"):
        v = ti.get(k)
        if v:
            target = (v if isinstance(v,str) else json.dumps(v))[:200]
            break
# Keep this identical to the PreToolUse matcher in .claude/settings.json
MUT = (r"mcp__claude_ai_(Shopify__(graphql_mutation|create-product|update-product|"
       r"bulk-update-product-status|create-collection|update-collection|add-to-collection|"
       r"set-inventory|create-discount|claim-storefront-preview)|"
       r"Meta_Ads__ads_(create_.*|update_.*|activate_entity|boost_ig_post|delete_.*|"
       r"catalog_create.*|pixel_.*|experiment_.*)|Windsor_ai__execute_action|Porter__execute|"
       r"Gmail__(create_draft|create_label|update_label|delete_label|label_message|label_thread|"
       r"unlabel_message|unlabel_thread)|"
       r"Canva__(publish-brand-template|commit-editing-transaction|create-design-from-candidate|"
       r"create-design-from-brand-template|create-folder|create-brand-template-draft|move-item-to-folder)|"
       r"Google_Drive__(create_file|copy_file))")
is_mut  = bool(re.fullmatch(MUT, tool)) if tool else False
exec_on = os.environ.get("NG_EXECUTE") == "1"
gate = ("allowed-exec" if exec_on else "blocked") if is_mut else "n/a"
rec = {
    "ts": datetime.datetime.now().isoformat(timespec="seconds"),
    "event": event, "tool": tool, "target": target,
    "cwd": data.get("cwd",""), "gate": gate,
}
try:
    with open(out, "a") as f:
        f.write(json.dumps(rec, ensure_ascii=False) + "\n")
except Exception:
    pass
' 2>/dev/null
exit 0
