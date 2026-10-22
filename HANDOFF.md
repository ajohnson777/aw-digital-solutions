# Your new website: AW Digital Solutions

For Alex and Will. This explains how to look at the site, how to change it, and what's left before it goes live.

> **Nothing here will break the site.** The worst case is you change a word, don't like it, and change it back.

---

## 1. How to look at the site

The site isn't live on the internet yet (see section 4). To see it on your own computer:

**One-time setup** (only the first time, on each computer):

1. Install **Node.js** from [nodejs.org](https://nodejs.org) (the "LTS" button).
2. Open a terminal in the project folder `C:\Users\alexj\Projects\aw-digital-solutions` and run:
   ```
   npm install
   ```

**Every time you want to look at it:**

1. In that folder, run:
   ```
   npm run dev
   ```
2. Open **http://localhost:4321** in your browser.
3. Edits you save appear in the browser straight away.
4. To stop the preview, click the terminal and press **Ctrl + C**.

---

## 2. How the menu works (you'll get asked about this)

The site is designed like an architect's set of drawings. Each page is a "sheet" with a number: A-00 Home, A-01 Services, A-02 Process, A-03 About, A-04 Contact.

- **The menu button** sits in the small panel in the corner (bottom right on a computer, along the bottom edge on a phone). That panel also shows which page you're on, like the title block on a drawing.
- **Press it** and the whole screen turns into a blue "blueprint" listing every page in big type. One tap or click takes you anywhere.
- **To close it:** press the ✕ button or the **Esc** key.
- **On a phone** there's also a "Start a project" button right in that bottom bar.
- **Keyboard and screen-reader users:** the menu can be opened, used and closed without a mouse. While it's open, the Tab key stays inside it, and screen readers announce it as the site menu.
- **Older browsers, or JavaScript turned off:** the button becomes a plain "Menu" link that jumps to the page list in the footer. Every page is still one click away.
- **People who've turned on "reduce motion"** on their device get the same site with the animations switched off. Nothing is hidden from them.

**The numbers in the drawing on the home page are real.** Page weight, load time, text contrast and motion setting are measured live in each visitor's browser, so they'll differ slightly from person to person. That's deliberate: it shows "fast and accessible" instead of just claiming it.

---

## 3. How to change things

### The one file that matters: `src/data/site.js`

Almost every fact on the site comes from this one file: your name, mission, email, the menu, the services, the process steps. Change it once and it updates on every page.

Open it in any text editor (Notepad works; [VS Code](https://code.visualstudio.com) is nicer).

**Change the email address:**

```js
email: 'hello@awdigitalsolutions.example',
emailIsPlaceholder: true,
```
becomes
```js
email: 'hello@yourrealdomain.com',
emailIsPlaceholder: false,
```
Switching `emailIsPlaceholder` to `false` removes the red "Placeholder" tag.

**Change a service line:** find the service under `services` and edit the words between the quote marks:

```js
line: 'We stay on after launch and look after it.',
```

**Add something to "What's included":** add a line to that service's `includes` list, with quotes and a comma at the end:

```js
'One point of contact: us',
'Monthly check that everything still works',
```

**The safe rule:** change the words *inside* the quote marks. Leave the quote marks, commas and brackets alone. If you use an apostrophe inside a line (like *don't*), either write the line in double quotes `"like this"` or use the curly ’ apostrophe.

### Words that aren't in `site.js`

Page headlines and paragraphs live in `src/pages/` (one file per page, e.g. `about.astro`). Change the words between the `>` and `<` marks, and leave the pointy-bracket parts alone.

Example, in `src/pages/about.astro`:

```html
<h1 class="display">A is for Alex. W is for Will.</h1>
```

### Adding photos

There are no photos on the site yet; it's designed to look finished without them. When you add one:

1. Put the image file in the `public/` folder.
2. Every image needs an **alt description**, a sentence saying what's in the picture. That's what blind visitors hear and what search engines read. For example, `alt="Alex and Will at their desk, reviewing a site on a laptop"`.

### Changing the share image

If you change the mission or the business name, regenerate the preview image shown when someone shares a link to the site:
```
node scripts/og.mjs
```

---

## 4. What's left before going live

### 🔴 Blockers (the site must not launch with these)

1. **Connect the contact form.** Right now the form shows a red note saying it isn't connected, and nothing gets sent. To fix it:
   - Create a free form at [formspree.io](https://formspree.io), pointed at the inbox you want inquiries to reach.
   - Copy the form URL it gives you (looks like `https://formspree.io/f/abcdwxyz`).
   - In `src/data/site.js`, paste it in and turn it on:
     ```js
     formEndpoint: 'https://formspree.io/f/abcdwxyz',
     formIsConnected: true,
     ```
   - Send yourself a test message from the live site.
2. **Your real email address.** Replace the placeholder (see section 3). It appears in the footer, the menu, the contact page and the privacy page.
3. **Your real domain.** In `src/data/site.js`, replace `https://awdigitalsolutions.example` with your domain. That one line fixes the sitemap, robots.txt, search-engine links and social previews.
4. **Privacy page review.** `/privacy/` is a plain-language draft marked PLACEHOLDER. Have it checked, then delete the red note at the top of `src/pages/privacy.astro`.

### 🟡 Please confirm (we wrote these for you, so check they're true)

- **The services lists.** "Build" and "Redesign" are taken from your own process. **"Manage"** is deliberately vague (*changes when you need them, keeping it up to date and working*) because you haven't said exactly what management includes. Tell us what it covers, e.g. hosting, monthly updates or a response time, and we'll make it specific.
- **About page, second paragraph:** *"We started AW to build websites the way we think they should be built for every business…"* We wrote that. Replace it with your real reason, in your own words.
- **Roles:** you're both listed as "Co-founder". Give us real titles if you'd like them.
- **Surnames:** only first names are used. Add surnames if you want them shown.

### 🟢 Nice to have (not blocking)

- **Portraits of you both.** The About page uses a drawn AW monogram for now. Good portraits would help: each of you, daylight, plain background, shoulders up, looking at the camera. A third shot of the two of you working together would be even better. Only use photos you took or paid for.
- **A Work page.** Once you've shipped client sites you have permission to show, add a sheet A-05 "Work". Until then, showing nothing is more honest than showing made-up examples.
- **Analytics.** None is installed, which is why the privacy page says no tracking. If you add something, choose a privacy-friendly option like Plausible and update the privacy page.
- **Social media links.** Send them and we'll add them to the footer.

---

## 5. Publishing it

The plan: the project lives on **GitHub**, and **Vercel** publishes it.

1. Create a GitHub repository and push this folder to it (the commands are in `README.md`).
2. At [vercel.com](https://vercel.com), choose "Add New Project", pick the repository and press Deploy. Vercel recognises Astro automatically.
3. In Vercel's Domains settings, add your domain and follow its DNS instructions. Vercel sets up the secure padlock (SSL) for you.

> After that, **every time you save a change and push it, the live site updates itself within about a minute.** You never touch a server.

---

## 6. Things worth not breaking

- **The cobalt blue (`#2335c8`)** is defined once, at the top of `src/styles/global.css`, as `--cobalt`. Change it there and it changes everywhere. Any new colour must keep text readable: the site currently passes the WCAG AA contrast standard everywhere, which is part of what "accessible" promises.
- **One main headline per page** (the `<h1>`). Search engines and screen readers rely on it.
- **Alt descriptions on images.** Never leave them blank on a meaningful photo.
- **The footer page list.** It's the backup menu for anyone whose browser can't run the animated one.

---

## 7. What was deliberately left out

- **No reviews or testimonials page, and no testimonials anywhere.** You have none yet, and we never invent them.
- **No events page.** As requested.
- **No opening hours, no address and no map.** As requested.
- **No portfolio of client work.** There are no client projects to show yet; the Process page explains how you work instead.
- **No prices.** None were provided. The site asks people to get in touch.
- **No phone number.** None was provided. Contact is by form and email.
- **No dark mode.** The drafting-vellum look is the brand. It could be added later.
