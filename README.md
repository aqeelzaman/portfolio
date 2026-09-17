# Portfolio

Design and video-editing portfolio for **Aqeel Zaman**.
Live at **https://aqeelzaman.github.io/portfolio**

Plain HTML, CSS and JavaScript. No build step, no dependencies, no npm.
Edit a file, refresh the browser, commit, push — that's the whole workflow.

---

## The only file you normally edit

**[`data/projects.js`](data/projects.js)** holds all your content: bio, links,
teams, projects, and which projects are favourites. It's heavily commented.
Everything else in this repo renders that file.

---

## Adding a project in three steps

**1 — Make a folder for it** under the right team:

```
assets/teams/<team-id>/<project-name>/
```

**2 — Drop the files in.** Images and self-hosted video both live here:

```
assets/teams/annual-fest/posters/01.jpg
assets/teams/annual-fest/posters/02.jpg
assets/teams/annual-fest/aftermovie/reel.mp4
assets/teams/annual-fest/aftermovie/thumb.jpg
```

**3 — Add an entry** to the team's `projects` array in `data/projects.js`:

```js
{
  id: "fest-posters",                     // unique across the whole file
  title: "Main Campaign Posters",
  description: "One or two sentences about the work.",
  tags: ["Poster", "Photoshop"],
  media: [                                // 2+ items = carousel, automatically
    { type: "image", src: "assets/teams/annual-fest/posters/01.jpg", alt: "Announcement" },
    { type: "image", src: "assets/teams/annual-fest/posters/02.jpg", alt: "Line-up" }
  ],
  links: [
    { label: "On Instagram", url: "https://instagram.com/p/xxxx", icon: "instagram" }
  ]
}
```

---

## Media types

| Type | Use it for | Example |
|---|---|---|
| `image` | posters, stills, layouts | `{ type:"image", src:"…/01.jpg", alt:"Announcement poster" }` |
| `video` | short self-hosted clips | `{ type:"video", src:"…/reel.mp4", poster:"…/thumb.jpg" }` |
| `youtube` | anything long or heavy | `{ type:"youtube", id:"dQw4w9WgXcQ" }` |
| `vimeo` | same | `{ type:"vimeo", id:"76979871" }` |

> **Size limit.** GitHub blocks any single file over **100 MB** and warns above
> 50 MB; the whole repo should stay under about **1 GB**. Export self-hosted
> clips as H.264 MP4, 1080p, and keep them under ~30 MB. Anything bigger
> belongs on YouTube as a `youtube` entry — the card looks the same either way.

Self-hosted video gets the minimal player: play/pause, scrub, mute, fullscreen.
Only one video plays at a time, and a video pauses when you scroll away from it.

### Optional per-project fields

| Field | Effect |
|---|---|
| `wide: true` | Card spans the full row. Use it for landscape video. |
| `aspect: "16/9"` | Force the media frame's shape. Also accepts `"4/3"`, `"1/1"`, `"3/4"`. |
| `tags: [...]` | Small pills under the title — tools, disciplines, year. |

---

## Favourites

The **My Personal Favorites** section at the top is built from a list of ids:

```js
favorites: {
  title: "My Personal Favorites",
  description: "Why these are the ones you'd show first.",
  ids: ["fest-main-poster", "fest-aftermovie", "club-rebrand"]
}
```

Those projects appear at the top *and* stay in their own team section. Each
favourite card shows which team it came from. Reorder the array to reorder them.

---

## Adding a background image

Drop a file into `assets/background/` with one of these names:

```
assets/background/background-dark.jpg     ← shown in dark mode
assets/background/background-light.jpg    ← shown in light mode
```

`.png`, `.jpeg` and `.webp` also work — the site tries each extension
until one loads. **If no file is there, nothing breaks** — you just get the
default gradient. Delete the file to go back.

A readability veil is applied automatically over any background you add. For a
busy photo, raise the blur in `data/projects.js`:

```js
background: { …, blur: 6 }
```

---

## Adding your photo

Save a square image as `assets/profile/avatar.jpg`. If it isn't there, the site
shows your initials on a gradient instead.

---

## Reordering teams

Teams render in the order of the `teams` array in `data/projects.js`, and the
sidebar follows the same order. Cut and paste a team block to move it.

---

## Previewing locally

Just open `index.html` in a browser — it works from the filesystem. Or, if you
want a real server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Publishing

Push to `main`, then in the repo go to **Settings → Pages** and set
*Source* to **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**.
The first deploy takes a minute or two; later pushes go live in seconds.

---

## What's in each file

| Path | What it does |
|---|---|
| `data/projects.js` | **Your content.** The file you edit. |
| `index.html` | Page shell — sidebar, hero, lightbox markup. |
| `css/style.css` | All styling and both themes, organised in numbered sections. |
| `js/app.js` | Renders the data; carousels, video, lightbox, scrollspy. |
| `.nojekyll` | Stops GitHub Pages from running Jekyll over the files. |

---

## Keyboard and accessibility notes

- **Esc** closes the lightbox; **←/→** move between images.
- Carousels respond to **←/→** when focused, and to swipes on touch.
- The sidebar opens on hover on desktop, and on keyboard focus for tab users.
- On screens under 900px the sidebar becomes a drawer behind the menu button.
- Everything animated respects the OS **Reduce Motion** setting.
