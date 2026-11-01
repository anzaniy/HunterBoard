# Hunter Board

A fan-made Monster Hunter reference site: quest reward comparison and endgame builds for **Monster Hunter Wilds**, plus a launch reference for **Monster Hunter Outlanders**.

Live URL: <https://hunterboard.live/>

Pure static HTML, CSS and JavaScript. No build step, no framework, no backend, no dependencies to install.

## Structure

```
/
├── index.html                  hub — picks a game
├── 404.html                    custom not-found page (absolute paths)
├── about.html
├── contact.html
├── privacy.html
├── credits.html                licences + data sources for both games
├── robots.txt
├── sitemap.xml
├── favicon.ico / favicon.svg
├── apple-touch-icon.png / icon-192.png / icon-512.png
├── og-image.png                1200×630 social preview
│
├── shared/
│   ├── styles.css              base tokens, topbar, tables, wilds components
│   └── site.css                game switcher, hub, legal, Outlanders components
│
├── wilds/
│   ├── index.html              quest board
│   ├── builds.html             character builds
│   ├── credits.html            redirect → ../credits.html
│   ├── script.js                quest table: filter, sort, search, pagination
│   ├── builds.js                build cards + detail panel
│   ├── quests-data.js          86 base quest records (155 with event quests)
│   ├── event-quests.js
│   ├── builds-data.js          14 weapon builds
│   ├── skills-data.js          skill / set-bonus lookup
│   ├── monster-icons.js        monster name → icon filename
│   ├── quests-data.json        duplicate of quests-data.js for reference
│   └── assets/
│       ├── monsters/           56 icons, 128px, ~10 KB each
│       └── weapons/            14 icons
│
└── outlanders/
    └── index.html              launch guide, roles, buddies, Adventurers
```

`paths.json` does not exist — every link is relative and written by hand. Run the checker (below) after any rename.

## Run locally

Any static server works. From this folder:

```powershell
# Python
python -m http.server 8080

# or Node
npx serve .
```

Then open <http://localhost:8080/>. Opening `index.html` directly with `file://` mostly works, but `fetch`-based features and some browser rules behave differently, so prefer a server.

## Deploy (Cloudflare Pages)

1. Push this folder to a GitHub repository (private is fine).
2. Cloudflare dashboard → **Workers &amp; Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo, then set:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Deploy. The site is live at `<project>.pages.dev`.
5. **Custom domains** → add `hunterboard.live` (and `www.hunterboard.live` if wanted), then point the domain's nameservers at Cloudflare.
6. Google Search Console → add the domain property → verify with the DNS TXT record → submit `sitemap.xml`.

Cache note: Cloudflare Pages serves `_headers` if you add one. No header rules are required; do not add a `Content-Security-Policy` that blocks `fonts.googleapis.com` or `fonts.gstatic.com` unless you also self-host the fonts.

## Editing content

- **Quests** live in `wilds/quests-data.js`. Each record needs `name`, `type`, `hrp`, `zenny`, `time`, targets and rewards. Keep the `source` field pointing at Kiranico.
- **Builds** live in `wilds/builds-data.js`; the armor/skill lookup is in `wilds/skills-data.js`.
- **Monster icon mapping** is a single line-per-monster map in `wilds/monster-icons.js`. This is the file to touch when swapping to original art.
- **Outlanders** is hand-written HTML in `outlanders/index.html` — no data file yet, because the roster is still settling.

Whenever the game version changes, update the `DATA v1.040` badge in the Wilds header, the wording in `sources`, and the `lastmod` dates in `sitemap.xml`.

## Image pipeline

Icons were resized to a 128 px box and re-encoded as WebP (quality 82). The whole `wilds/` folder is under 1 MB. If you add art:

```powershell
python -c "from PIL import Image; im=Image.open('in.png').convert('RGBA'); im.thumbnail((128,128), Image.LANCZOS); im.save('out.webp','WEBP',quality=82,method=6)"
```

Keep the `MHWA-<Monster>_Icon.webp` naming so `monster-icons.js` keeps working.

## Before applying for AdSense

The site is deliberately **not** monetised yet. Order matters:

1. **Replace the CAPCOM icons with original artwork.** Monster icons are CC BY-SA from the Monster Hunter Wiki; weapon icons are from the official icon set. Both are fine for a free fan project, but advertising next to licensed game art is exactly the risk Google's copyright policy and Capcom's fan-content guidelines care about. Original art removes the argument.
2. **Get to 20–30 substantial pages.** Right now there are 8. AdSense has no traffic minimum, but thin sites get rejected for "low value content".
3. **Then** apply. Privacy policy, contact and about pages already exist, which is a common rejection reason removed from the list.
4. **Never paywall a tool.** AdSense plus donations is fine; gating the quest board is not.

Capcom's Fan Content Guidelines (November 2025) do not license monetisation of fan works. Display ads are tolerated in practice; they are not permission. Keep the disclaimer in the footer visible.

## Licence

Site code and design: © anzaniy. Do not republish the layout wholesale.

Third-party assets keep their own licences — see `credits.html`. Monster Hunter and all related names are trademarks of CAPCOM CO., LTD. This project is unofficial and not affiliated with CAPCOM, TiMi Studio Group or Proxima Beta.