# People. Organizations. Futures Lab (POF Lab)

Source for the lab website. The design comes from Figma Make and is a
React + Vite + Tailwind CSS app.

## Preview and build

```sh
npx pnpm@10.34.3 install            # once
npx pnpm@10.34.3 run dev            # live preview while editing
npx pnpm@10.34.3 run build:pages    # build the site into docs/
```

The built site lives in `docs/`, which GitHub Pages can serve directly
(Settings → Pages → Deploy from a branch → `main` / `docs`).

To preview locally with live reload (opens the browser):

```sh
./preview_site.sh
```

To rebuild, commit, and push in one step:

```sh
./update_site.sh "what changed"
```

## Editing

- Page content and layout: `src/App.tsx`
- Colors and fonts: `src/index.css`
- Page title, description, search indexing: `.figma/make/site.json`

If you re-export from Figma Make, copy the whole export over this folder,
including the hidden `.figma/` folder, then re-add the `build:pages` script
to `package.json`.
