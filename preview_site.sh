#!/bin/sh
# Preview the site locally with live reload. Press Ctrl+C to stop.
# Usage: ./preview_site.sh
set -e
cd "$(dirname "$0")"

URL=http://localhost:8443/

# If a preview is already running, just open it.
if curl -s -o /dev/null "$URL"; then
  echo "A preview is already running at $URL"
  open "$URL"
  exit 0
fi

npx --yes pnpm@10.34.3 install --frozen-lockfile

# Open the browser once the dev server has had a moment to start.
(sleep 2 && open "$URL") &

npx --yes pnpm@10.34.3 run dev
