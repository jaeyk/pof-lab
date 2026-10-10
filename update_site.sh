#!/bin/sh
# Rebuild the site into docs/ and publish it to GitHub Pages.
# Usage: ./update_site.sh ["commit message"]
set -e
cd "$(dirname "$0")"

npx --yes pnpm@10.34.3 install --frozen-lockfile
npx --yes pnpm@10.34.3 run build:pages

git add -A
if git diff --cached --quiet; then
  echo "No changes to publish."
  exit 0
fi

git commit -m "${1:-Update site}"
git push origin main
echo "Published. The live site updates in a minute or two: https://jaeyk.github.io/pof-lab/"
