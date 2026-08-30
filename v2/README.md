# ANWCL website

Rebuild of the AI and Next-Generation Wireless Communication Laboratory site
(Yıldız Technical University, Department of Electronics and Communication Engineering).

Static HTML, CSS and vanilla JavaScript. No build step, no dependencies, no
package manager. Works on GitHub Pages as-is.

---

## Before it will look right

Copy the `photos/` folder from the old repository into this one. The export you
sent contained no binary files, so only `lablogo.png` and `lablogo.ico` are here.
The pages reference these existing filenames:

```
photos/1.webp … 6.webp        hero candidates
photos/director.webp          Shah
photos/karabulat.webp         Karabulut  (filename misspelled in the old repo, kept as-is)
photos/anis.webp  salah.webp  yalda.webp  osman.webp
photos/sumaiya.webp  aynur.webp  abdulsamet.webp  hava.webp
photos/ece.webp  yigit.webp  siam.webp
photos/1001.webp  1001_1.webp  3501.webp  3501_1.webp
```

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly with `file://` will work, but a server is closer
to production behaviour.

---

## Structure

```
index.html          the landing page — every section
member.html         profile template          (member.html?id=salah-uddin)   [next stage]
project.html        project template          (project.html?id=tubitak-1001) [next stage]

data/lab.js         all site content: research areas, projects, publications,
                    news, director's message, contact details
data/members.js     one record per person
js/icons.js         every SVG in one place, referenced by key
js/site.js          rendering + navigation + motion
styles/tokens.css   colour, type scale, spacing — change values here
styles/site.css     layout and components
photos/             images
```

### Making common changes

| You want to | Edit |
| --- | --- |
| Change the accent colour | `styles/tokens.css` → `--accent` |
| Add a person | `data/members.js`, copy any block, set a unique `id` |
| Add a publication | `data/lab.js` → `PUBLICATIONS` |
| Add a project | `data/lab.js` → `PROJECTS` |
| Reorder the people section | `data/lab.js` → `PEOPLE_GROUPS` |
| Change section spacing site-wide | `styles/tokens.css` → `--band-y` |
| Change the lab's name anywhere | `data/lab.js` → `LAB` |

Counts on the homepage (ongoing projects, researchers, publications) are
computed from these files at page load, so they can never drift out of date.

---

## Design system

Colours are sampled from the lab logo:

| Token | Value | Use |
| --- | --- | --- |
| `--accent` | `#0E50CA` | links, active nav, primary buttons |
| `--accent-deep` | `#0B1098` | hover |
| `--accent-sky` | `#1B86EA` | on dark backgrounds only — fails contrast on white |
| `--surface` | `#F2F5F8` | tinted section bands |
| `--deep` | `#071233` | dark band, footer |

Type is IBM Plex: Sans for interface, Serif for long-form prose, Mono for
metadata (DOIs, dates, funder codes). Full Turkish coverage.

The section divider is a slotted frame rule — a row of segments with one lit in
accent, advancing one position per section down the page. It reads as a position
indicator and echoes the MAC frames the lab studies.

---

## Content still needed

Placeholders render as visible amber `TODO` chips so nothing is silently
forgotten. Delete the `.todo` block in `styles/site.css` once they're resolved.

**Blocking**
- Contact details. The previous site had none at all: no email, no room, no
  phone, no map. `data/lab.js` → `CONTACT`.
- Bios for **Osman Kaya** and **Hava Karabağ**. Both had cards on the old
  homepage but no profile record, so "View Profile" led to an error page.
- A bio for **Yalda Babaie** — the old site gave her Mohammed Anis Oukebdane's
  text verbatim.
- Titles and dates for the two YouTube videos.

**Should be checked**
- The Director's Message states five funded projects and "4 Ph.D., 6 M.Sc.,
  4 B.Sc. students". The data now holds six ongoing projects and 4 / 4 / 3.
- **Osman Yiğit Küçükkıratlı**'s record shows a transfer to Istanbul Technical
  University from 2025 while he is listed as an ANWCL undergraduate researcher.
- **Ece Tan**'s project was labelled TÜBİTAK 1001 with the 3501 description
  attached; set to 3501 here.
- **Md. Thouhidur Rahman** has no portrait, graduation year or current position.
- The full publication list appears to live in
  `informations/update files/Publications.DOCX`.

**Fixed already**
- LinkedIn URLs for Aynur Çetinkaya and Ece Tan were missing `https://` and
  resolved as relative paths.
- Sumaiya Sultana's ORCID pointed at a private dashboard URL.
- The two member lists (inline in `index.html` and in `database/members.js`)
  disagreed; there is now one list.
- `@font-face` paths were relative to `/styles/`, so the fonts never loaded and
  everything fell back to Tahoma.
- The favicon was requested as `Lablogo.ico` but stored as `lablogo.ico`, which
  breaks on case-sensitive hosts.
- Duplicated `<script>` blocks ran the slideshow timer, scroll observer and nav
  handler twice.
- TEKNOFEST results were filed under "Finished Projects"; they are achievements
  and now sit in News.

---

## Notes

- Fonts load from Google Fonts. To self-host, drop the woff2 files into
  `fonts/` and replace the `<link>` with `@font-face` rules — paths must be
  relative to the **stylesheet**, which is what broke on the old site.
- Member and project pages use `?id=` query parameters, so they share one
  template and need no build step. The trade-off is weaker link previews and
  indexing. If that matters later, a ~40-line Node script can pre-render them
  to real paths without changing the data files.
- The logo PNG has an opaque `#EAFBFF` background and a baked-in wordmark. The
  header crops to the mark and sets "ANWCL" in type. A transparent SVG would be
  better if the vector source exists.
- `translate="no"` is set on the lab name. The reference site renders its own
  name "ASİL" as "ROYAL" under Chrome auto-translate.
