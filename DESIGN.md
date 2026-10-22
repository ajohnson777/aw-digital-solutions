---
name: AW Digital Solutions
description: A construction drawing set for a two-person web studio; vellum, graphite, non-photo blue, one cobalt.
colors:
  cobalt: "#2335c8"
  cobalt-deep: "#18248f"
  cobalt-hi: "#3446dc"
  on-cobalt: "#ffffff"
  on-cobalt-soft: "#e3e7ff"
  on-cobalt-line: "#c9d2ff"
  vellum: "#e4e5e1"
  vellum-hi: "#f7f8f5"
  vellum-lo: "#bfc2bb"
  graphite: "#1c1e21"
  graphite-2: "#4a4e54"
  rule: "#9da19a"
  input-border: "#767a72"
  placeholder: "#5d6168"
  blueline: "#8fb3d9"
  error: "#a12b1f"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, min(1.1rem + 4.6vw, 8.6vh), 4.9rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 116"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2.6vw, 3.4rem)"
    fontWeight: 620
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.8vw, 1.6rem)"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 106"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.02rem + 0.45vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 72"
rounded:
  focus: "4px"
  scale: "8px"
  tool-sm: "12px"
  tool: "14px"
  toggle: "16px"
  tool-lg: "20px"
  sheet: "0px"
spacing:
  s-1: "0.5rem"
  s-2: "1rem"
  s-3: "1.5rem"
  s-4: "2.5rem"
  s-5: "4rem"
  s-6: "clamp(5rem, 3rem + 7vw, 10rem)"
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
    rounded: "{rounded.tool}"
    padding: "0.85rem 1.4rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-hi}"
    textColor: "{colors.on-cobalt}"
  button-tool:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.tool}"
    padding: "0.85rem 1.4rem"
    height: "52px"
  button-small:
    rounded: "{rounded.tool-sm}"
    padding: "0.6rem 1.05rem"
    height: "44px"
  button-on-cobalt:
    backgroundColor: "{colors.on-cobalt}"
    textColor: "{colors.cobalt-deep}"
    rounded: "{rounded.tool}"
    padding: "0.85rem 1.4rem"
    height: "52px"
  input:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.tool}"
    padding: "0.85rem 1rem"
    height: "54px"
  choice:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.tool-sm}"
    padding: "0.6rem 1rem"
    height: "46px"
  choice-checked:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.cobalt-deep}"
  well:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.tool}"
    size: "48px"
  well-lg:
    rounded: "{rounded.tool-lg}"
    size: "72px"
  index-toggle:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.toggle}"
    width: "64px"
    height: "56px"
  title-block:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.sheet}"
    width: "380px"
  drawing-index:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
---

# Design System: AW Digital Solutions

## Overview

**Creative North Star: "The Construction Set"**

Every page is a sheet in a drawing set (A-00 to A-04) laid on cool grey drafting vellum. The studio's claim that it builds properly is shown as drafting discipline: graphite line weights carry hierarchy, non-photo blue construction lines sit underneath as the drawing's scaffolding, annotation is set in condensed uppercase, and a single cobalt is reserved for action and for the blueprint. A fixed title block names the current sheet, and the menu is the set's drawing index, flooding the screen in cobalt.

The surface is calm and sparse; density comes from ruled rows, not from cards or boxes. Neumorphic extrusion exists, but only on tools a hand can operate: buttons, inputs, choice chips, the index toggle, icon wells and the scale bar. Content never sits in a raised panel. Motion follows construction order: a rule draws, strokes draw themselves, then content settles onto them.

Numbers on these sheets are measured live in the visitor's browser (page weight, ready time, contrast, motion preference, drawing scale) and are never hard-coded claims. The world rejects the dark-SaaS-agency hero with neon gradient and logo wall.

**Key Characteristics:**
- Vellum ground, graphite ink, blueline construction, one cobalt.
- Hierarchy by line weight (1px hairline, 2px section head), never by enclosure.
- One variable face, Archivo, swung across its width axis.
- Neumorphic depth on tools only.
- Lines draw, then content settles; full reduced-motion and no-JS fallbacks.
- Measured readouts, never claimed figures.

## Colors

A muted drafting palette with exactly one saturated colour, used for action and for the drenched blueprint field.

### Primary
- **Drafting Cobalt** (cobalt): primary buttons, focus outlines, icon strokes in wells, step nodes, stage numerals, readout keys, selection, and the full-bleed blueprint and drawing-index fields.
- **Deep Cobalt** (cobalt-deep): hover border on primary buttons, text on white buttons, checked choice text, success status.
- **Lit Cobalt** (cobalt-hi): primary button hover fill.
- **Blueprint White** (on-cobalt): primary text and lines on the cobalt field.
- **Blueprint Mist** (on-cobalt-soft): secondary text (leads, purpose lines) on the cobalt field.
- **Blueprint Line** (on-cobalt-line): the blueprint grid, the mark's crossbar on cobalt, and dimension drawings on cobalt. Lines only.

### Tertiary
- **Non-Photo Blue** (blueline): construction grids behind heroes and page heads, construction strokes in drawings. Decorative only.

### Neutral
- **Drafting Vellum** (vellum): the page ground and the face of every extruded tool.
- **Vellum Light Edge** (vellum-hi) / **Vellum Shadow Edge** (vellum-lo): the two sides of every neumorphic extrusion and well.
- **Graphite** (graphite): body text, headings, primary rules, sheet frame, title block border.
- **Soft Graphite** (graphite-2): leads, prose, annotation labels, drawing text (6.6:1 on vellum).
- **Hairline** (rule): row dividers and light rules between ruled items.
- **Input Edge** (input-border): resting border of text inputs, chosen for 3:1 non-text contrast on vellum.
- **Placeholder Graphite** (placeholder): input placeholder text.
- **Correction Red** (error): validation errors, invalid input borders, and dashed placeholder flags.

### Named Rules
**The One Cobalt Rule.** Cobalt is the only saturated colour. It means "act here" or "this is the blueprint"; it is never decoration on a vellum sheet.

**The Blueprint Text Rule.** Text on the cobalt field uses Blueprint White (#ffffff) or Blueprint Mist (#e3e7ff), never Blueprint Line (#c9d2ff). The blueprint grid lightens the field, and #c9d2ff measured 4.41:1 there. Blueprint Line is for lines only.

**The Blueline Rule.** Non-Photo Blue is decorative only: construction grids and construction strokes. It never carries text, icons, borders of controls, or state.

**The Measured Edge Rule.** Text inputs rest on a #767a72 border (3:1 non-text contrast). Do not lighten it toward the hairline grey.

## Typography

**Display Font:** Archivo variable (with ui-sans-serif, system-ui, sans-serif), self-hosted, weight 100-900, width 62-125%.

**Character:** One face doing three jobs by width alone: expanded and tight for titles, condensed uppercase for annotation, normal width for prose. The swing along the width axis is the typographic system.

### Hierarchy
- **Display** (650, width 116%, clamp(2.4rem, min(1.1rem + 4.6vw, 8.6vh), 4.9rem), 0.98): page titles and the blueprint close. Balanced wrapping.
- **Headline** (620, width 112%, clamp(1.9rem, 1.2rem + 2.6vw, 3.4rem), 1.02): section headings. Balanced wrapping.
- **Title** (620, width 106%, clamp(1.25rem, 1.05rem + 0.8vw, 1.6rem), 1.15): item headings. Service rows enlarge it to clamp(1.9rem, 1.2rem + 2.4vw, 3rem) at width 118%.
- **Specification word** (700, width 125%, clamp(2.6rem, 1.4rem + 5vw, 5.6rem), 0.92, -0.045em): the standard names in the spec table; stage numerals use the same widest cut at clamp(2.4rem, 1.6rem + 3vw, 4.2rem) in cobalt.
- **Lead** (400, clamp(1.125rem, 1.02rem + 0.45vw, 1.35rem), 1.5): Soft Graphite, max 46ch.
- **Body** (400, 1.0625rem, 1.6): prose in Soft Graphite, max 68ch, pretty wrapping.
- **Label** (650, width 72%, 0.8125rem, 0.06em, uppercase): drawing annotation. Sheet numbers, title block fields, list headings, readout labels, stage numbers, SVG callouts.

### Named Rules
**The Width Axis Rule.** Hierarchy changes width before it changes weight: titles widen (106-125%), annotation narrows (72%), prose stays at 100%. Never introduce a second family.

**The Annotation Rule.** Condensed uppercase labels annotate a drawing: they name a sheet, a field, a stage or a measured value. They are not decorative eyebrows stacked over section headlines.

**The Tabular Readout Rule.** Measured figures use tabular numerals.

## Layout

A single centred sheet, `min(100% - 2 * gutter, 1320px)`, narrowed by 24px from 1024px up to clear the drawn sheet frame (a 1px graphite border inset 12px, with grid reference ticks every 12.5%). Sections are separated by vertical rhythm (s-6) and by drawn rules, never by background bands; the cobalt blueprint close is the one full-bleed field.

Composition is ruled rows: spec rows (5fr 4fr 3fr from 900px), service rows (96px well, 4fr, 5fr, link), stage rows (2fr 4fr 6fr), checklists and indexes with 28px icon columns. Section heads split 7fr / 5fr with the lead right-aligned from 900px. The hero splits 7fr / 5fr from 1024px with the self-drawing elevation on the right.

The title block is docked full-width at the bottom on mobile (body reserves 92px), floats as a 330px card at 768px, and joins the sheet frame's bottom-right corner as a 380px drafting title block at 1024px. The process sequence runs vertically, then becomes an 8-column horizontal line at 1100px.

Spacing steps: s-1 0.5rem, s-2 1rem, s-3 1.5rem, s-4 2.5rem, s-5 4rem, s-6 fluid 5-10rem.

### Named Rules
**The Line Not Box Rule.** A section or group boundary is a drawn line (1px graphite, 1px hairline, or a 2px graphite head rule), not a box, card or tinted panel.

## Elevation & Depth

Two depth languages, strictly separated. Sheets are flat: text, rules and drawings sit directly on vellum. Tools are neumorphic: soft paired shadows (light edge top-left, dark edge bottom-right) extrude buttons and toggles from the vellum, and inset pairs press wells, inputs and active states into it. On the cobalt field the same extrusion is rebuilt from cobalt-tinted light and dark.

### Shadow Vocabulary
- **Raise** (`-6px -6px 14px #f7f8f5, 6px 6px 14px #bfc2bb`): resting buttons.
- **Raise small** (`-3px -3px 8px #f7f8f5, 3px 3px 8px #bfc2bb`): small buttons, toggles, choice chips, raised wells, scale bar, step nodes.
- **Inset** (`inset 3px 3px 7px #bfc2bb, inset -3px -3px 7px #f7f8f5`): inputs, icon wells, pressed buttons, checked choices.
- **Cobalt raise** (`-6px -6px 14px #f7f8f5, 6px 6px 16px rgba(24, 36, 143, 0.38)`): primary button on vellum.
- **Blueprint raise** (`-4px -4px 10px rgba(110, 126, 255, 0.55), 4px 4px 12px rgba(10, 16, 80, 0.5)`): tools on the cobalt field.
- **Floating title block** (`0 1px 0 #f7f8f5, 0 18px 40px -18px rgba(28, 30, 33, 0.35)`): title block at tablet widths only; flat at desktop where it joins the frame.

### Named Rules
**The Tools Only Rule.** Extrusion belongs to things you operate. Content, rows, figures and text never get a neumorphic shadow.

**The Press Rule.** Pressing a tool swaps raise for inset and moves it 1px down. Focus is never shown by shadow alone: it is a 2px cobalt outline (white on cobalt).

## Shapes

Sheets are square: the frame, title block, rules and status boxes have no radius. Tools are softly rounded: 12px small tools and chips, 14px buttons, inputs and wells, 16px close button, 20px large wells, 8px scale bar, 4px focus outlines. Step nodes are circles. Placeholder and setup flags use a 1px dashed Correction Red border, like a redline mark on a drawing.

Icons are an authored set on a 24px grid, 1.5px stroke, round caps and joins, drawn as drafting objects (a set square in a frame, a revision sheet over an old one, a dial). The AW mark is one continuous miter-joined line in which the A's right leg is the W's first stroke, with a cobalt crossbar.

## Components

### Buttons
Tactile drafting tools: extruded from the vellum, pressed in on use.
- **Shape:** gently rounded (14px), 52px minimum height, 1.5px transparent border.
- **Primary:** cobalt fill, white text, cobalt raise, weight 640 at width 104%, trailing arrow icon.
- **Tool (secondary):** vellum fill, graphite text, raise.
- **Hover / Focus:** border becomes graphite (Deep Cobalt and Lit Cobalt fill on primary), arrow slides 4px right; focus is a 2px cobalt outline offset 4px. Active swaps to inset and translates 1px down. Transitions 260ms ease-out.
- **Small:** 44px, 12px radius, raise small, 0.95rem.
- **On cobalt:** white fill, Deep Cobalt text, blueprint raise, white focus outline.

### Text Links
Bold (640) links with an underline that draws in from the left (0 to 100%, 1.5px, 420ms) and a trailing arrow that slides 4px on hover.

### Chips (choices)
- **Style:** vellum, raise small, 12px radius, 46px tall, a 10px hollow ring before the label.
- **State:** checked presses inset with a cobalt border, Deep Cobalt text and a filled cobalt ring; hover shows a hairline border; focus is a 2px cobalt outline.

### Inputs / Fields
- **Style:** pressed into the vellum (inset), 14px radius, 54px minimum (textarea 160px), Input Edge border, cobalt caret.
- **Focus:** cobalt border plus a 3px rgba(35, 53, 200, 0.18) ring over the inset.
- **Error:** Correction Red border with a bold red message and alert icon.
- **Labels:** weight 640 at width 104%; hints in Soft Graphite at 0.9rem.

### Icon Wells
Icons sit in inset wells (48px, 14px radius, cobalt stroke); raised and large (72px, 20px radius) on service rows.

### Navigation: Title Block and Drawing Index
- **Title block:** fixed drafting title block with sheet number (label), sheet title, a "Drawn by A + W" field at desktop, and the Index toggle (64 by 56px, raise small, three bars that spread on hover, "Index" label). On mobile it docks full width with a small primary "Start a project" button that hides near the page's own call to action.
- **Drawing index:** a modal dialog that floods the screen in cobalt with a circular clip-path wipe from the toggle (720ms open, 480ms close), the blueprint grid behind, and sheets listed large (clamp(2rem, 1rem + 5vw, 4.6rem), width 118%) between half-opacity Blueprint Line rules. Rows slide 0.6rem on hover and draw a 2px white underline; the current sheet keeps its underline. Focus is trapped, Escape animates out, the rest of the page is inert.
- **No JavaScript:** the toggle becomes a plain "Menu" link to the footer sheet index.

### Ruled Rows (signature)
The spec table, service rows, stage rows and checklists are all the same object: a 2px graphite head rule, then items separated by 1px hairlines, content placed on a column grid. When motion is allowed, rows slide in 18px from the left along their rule.

### Self-Drawing Elevation (signature)
The hero drawing of a web page, with blueline construction, graphite ink, dimension lines and numbered cobalt callouts, drawn stroke by stroke (stroke-dashoffset on paths with pathLength 1, 1400ms each, staggered). Beneath it, a neumorphic scale bar and a ruled readout of live measurements with the note "Measured just now, on this page, in your browser."

### Blueprint Close (signature)
The one drenched section: cobalt field, Blueprint Line grid at 16% opacity on 48px squares, a display headline, a Blueprint Mist lead, a white button, and a dimensioned drawing in Blueprint Line from 1024px.

## Do's and Don'ts

### Do:
- **Do** separate sections and items with drawn lines: 2px graphite head rules, 1px hairlines.
- **Do** keep cobalt for action, focus, measured keys and the blueprint field.
- **Do** use #ffffff or #e3e7ff for any text on the cobalt field.
- **Do** widen Archivo for titles and condense it for uppercase annotation; prose stays at normal width.
- **Do** keep neumorphic extrusion on tools: buttons, inputs, chips, the index toggle, wells and the scale bar.
- **Do** show focus as a 2px cobalt outline (white on cobalt), never as a shadow change alone.
- **Do** measure every displayed number live in the browser and label it as measured.
- **Do** reveal in construction order: rule draws, strokes draw, then content settles, animating only transform and opacity.
- **Do** keep content visible by default; motion applies only once JavaScript confirms it is running and reduced motion is not requested.

### Don't:
- **Don't** set text in #c9d2ff on the cobalt field; it measured 4.41:1 over the blueprint grid.
- **Don't** use Non-Photo Blue (#8fb3d9) for text, icons, control borders or state.
- **Don't** lighten the input resting border below #767a72.
- **Don't** use clip-path in a reveal state on an element watched by IntersectionObserver; an element clipped to zero area is never reported and stays hidden.
- **Don't** animate letter-spacing, width or other layout properties in reveals.
- **Don't** hard-code performance, contrast or result figures as claims.
- **Don't** put content in raised cards, tinted panels or boxes.
- **Don't** introduce a second saturated colour, a second typeface, or a dark neon-gradient hero.
- **Don't** stack condensed uppercase eyebrows over section headlines.
