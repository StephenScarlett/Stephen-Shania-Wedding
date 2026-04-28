# Stephen & Shania Wedding Website

A Gothic/Victorian-themed wedding website for Stephen Scarlett & Shania Rampersadsingh.  
**Date:** Saturday, May 16th, 2026 · 4:30 PM  
**Venue:** SKYY View Lounge, Trinidad

---

## Quick Start

1. Open `index.html` in a browser — everything works locally with no build step.
2. Follow the customization steps below to add your photos, music, and forms.

---

## Customization Guide

### 1. Add Photos to the Gallery

1. Place your image files in the `images/` folder (e.g., `photo1.jpg`, `photo2.jpg`).
2. Open `index.html` and find the **Gallery** section (search for `gallery-grid`).
3. Replace each placeholder `<div>` with an `<img>` tag:

```html
<!-- BEFORE (placeholder) -->
<div class="gallery-item" data-index="0">
    <div class="gallery-placeholder"><span>Photo 1</span></div>
</div>

<!-- AFTER (your photo) -->
<div class="gallery-item" data-index="0">
    <img src="images/photo1.jpg" alt="Stephen and Shania" class="gallery-img">
</div>
```

4. Add more `gallery-item` divs to add more photos. Increment the `data-index` value.

### 2. Add a Couple Photo (Our Story)

1. Place your couple photo in the `images/` folder.
2. In `index.html`, find the **Our Story** section and replace the `photo-placeholder` div:

```html
<!-- BEFORE -->
<div class="photo-placeholder"><span>Our Photo</span></div>

<!-- AFTER -->
<img src="images/couple.jpg" alt="Stephen and Shania" style="width:100%; border: 2px solid rgba(212,175,55,0.3);">
```

### 3. Set Up the RSVP Form (Google Forms)

1. Go to [Google Forms](https://forms.google.com) and create a new form.
2. Add these fields:
   - **Full Name** — Short answer
   - **Will you be attending?** — Multiple choice: Yes / No
   - **Dietary Restrictions** — Short answer (mark as optional)
3. Click **Send** → click the **embed icon** (`< >`) → copy the `src` URL.
4. In `index.html`, find the **RSVP** section.
5. Delete (or hide) the `rsvp-placeholder` div.
6. Uncomment the `<iframe>` and paste your form URL:

```html
<iframe
    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?embedded=true"
    width="100%"
    height="800"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="RSVP Form">
    Loading…
</iframe>
```

7. Responses will appear in a linked Google Sheet (click the green Sheets icon in Google Forms → Responses tab).

### 4. Set Up Music Requests (Google Forms)

1. Create another Google Form with fields:
   - **Song Name** — Short answer
   - **Artist** — Short answer
   - **Your Name** — Short answer (optional)
2. Get the embed URL (same steps as above).
3. In `index.html`, find the **Music Requests** section and replace the placeholder with the iframe.

**Tip:** You can link both forms to the same Google Sheet on different tabs, or use separate sheets.

### 5. Add Background Music

1. Place your audio file in the `audio/` folder as `background.mp3`.
2. The play/pause button will appear in the bottom-right corner.
3. If your file has a different name, update the `<source>` tag near the bottom of `index.html`.

### 6. Update the Google Maps Embed

The current map searches for "SKYY View Lounge Trinidad". To get an exact pin:

1. Go to [Google Maps](https://maps.google.com) and find the venue.
2. Click **Share** → **Embed a map** → copy the `<iframe>` code.
3. Replace the `src` attribute in the map iframe in `index.html`.

---

## Deploying to GitHub Pages (Free Hosting)

1. Create a [GitHub](https://github.com) account if you don't have one.
2. Create a new repository (e.g., `stephen-shania-wedding`).
3. Push this project to the repository:
   ```bash
   cd Stephen-Shania-Wedding
   git init
   git add .
   git commit -m "Initial wedding website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/stephen-shania-wedding.git
   git push -u origin main
   ```
4. Go to **Settings** → **Pages** → set Source to `main` branch, root folder → **Save**.
5. Your site will be live at: `https://YOUR_USERNAME.github.io/stephen-shania-wedding/`

**Custom domain (optional):** In the Pages settings, you can add a custom domain (e.g., `stephenandshania.com`). You'll need to purchase the domain (~$10-15/year) and configure DNS.

---

## Project Structure

```
Stephen-Shania-Wedding/
├── index.html          ← Main website (single page, all tabs)
├── css/
│   └── style.css       ← Theme: colors, fonts, layout, responsive
├── js/
│   └── main.js         ← Tab switching, countdown, lightbox, music
├── images/             ← Your gallery & couple photos go here
│   └── README.txt
├── audio/              ← Background music file goes here
│   └── README.txt
└── README.md           ← This file
```

---

## Colors & Theme

| Color    | Hex       | Usage                        |
|----------|-----------|------------------------------|
| Black    | `#0D0D0D` | Background                   |
| Burgundy | `#800020` | Accents, hover effects       |
| Gold     | `#D4AF37` | Headings, borders, highlights|
| Cream    | `#F5F0E8` | Body text                    |

Fonts: **Cinzel** (headings) · **Cormorant Garamond** (body) — loaded from Google Fonts.

---

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no build tools
- Google Fonts for typography
- Google Forms + Google Sheets for RSVP and music requests
- GitHub Pages for free hosting
