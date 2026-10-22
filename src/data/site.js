// ─────────────────────────────────────────────────────────────
//  AW Digital Solutions — the one file that holds the facts.
//  Every page reads from here. Change something once and it
//  updates everywhere: header, footer, menu, contact page.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'AW Digital Solutions',
  shortName: 'AW',

  // The founders' own words. Keep verbatim.
  mission: 'Building and managing modern, fast, and accessible websites for all businesses.',

  founders: [
    { name: 'Alex', initial: 'A', role: 'Co-founder' },
    { name: 'Will', initial: 'W', role: 'Co-founder' },
  ],

  // PLACEHOLDER — replace with the real domain before launch.
  // Used for canonical links, the sitemap and social previews.
  domain: 'https://awdigitalsolutions.example',

  // PLACEHOLDER — replace with the real business email, then set
  // emailIsPlaceholder to false to remove the "not set up" tag.
  email: 'hello@awdigitalsolutions.example',
  emailIsPlaceholder: true,

  // PLACEHOLDER — paste your Formspree form URL here
  // (looks like https://formspree.io/f/abcdwxyz), then set
  // formIsConnected to true. Until then the form says so plainly.
  formEndpoint: 'https://formspree.io/f/REPLACE_ME',
  formIsConnected: false,
};

// The drawing set. Each page is a "sheet" with a number.
// This list drives the menu, the footer index and the sitemap.
export const sheets = [
  { no: 'A-00', title: 'Home', href: '/', purpose: 'The mission, in one sheet' },
  { no: 'A-01', title: 'Services', href: '/services/', purpose: 'Build, redesign, manage' },
  { no: 'A-02', title: 'Process', href: '/process/', purpose: 'How a project runs, start to finish' },
  { no: 'A-03', title: 'About', href: '/about/', purpose: 'Alex and Will' },
  { no: 'A-04', title: 'Contact', href: '/contact/', purpose: 'Start a project' },
];

// The three standards named in the mission.
export const standards = [
  {
    word: 'Modern',
    means: 'Designed for your business now, not dropped into a template from years ago. It looks current on a phone, a tablet and a big screen.',
    here: 'This site was drawn for us, from scratch, the same way we draw yours.',
  },
  {
    word: 'Fast',
    means: 'Small pages, few outside scripts, images sized for the screen they land on. People decide in seconds; the site should be ready before they do.',
    here: 'measure:weight',
  },
  {
    word: 'Accessible',
    means: 'Readable contrast, a menu that works from the keyboard, labels screen readers can announce, and motion that calms down when you ask it to.',
    here: 'measure:motion',
  },
];

// Services, in priority order.
export const services = [
  {
    id: 'build',
    title: 'Build',
    line: 'A new website, designed and built from nothing.',
    body: 'For businesses with no site yet, or one too far gone to save. We ask everything we need in one go, then plan the pages, write the words, design it and build it.',
    includes: [
      'One round of questions, then we get on with it',
      'Pages planned around what your customers come to do',
      'Copy written from what is true about your business',
      'A design made for you, not a reskinned template',
      'Works on phones, tablets and desktops',
      'Accessible markup, keyboard-friendly menus and forms',
      'A working contact form',
      'Page titles, descriptions, a sitemap and search basics',
      'A favicon and consistent branding on every page',
      'A plain-language guide to your new site',
    ],
  },
  {
    id: 'redesign',
    title: 'Redesign',
    line: 'Your current site, made modern without losing what works.',
    body: 'We go through what you have now: what looks dated, what breaks on a phone, what is slow, what is missing. We keep the content that earns its place and rebuild the rest.',
    includes: [
      'A review of your current pages, layout and content',
      'An honest list of what is outdated and why',
      'A check of every existing image: who owns it, and whether it is safe to keep',
      'Everything listed under Build',
    ],
  },
  {
    id: 'manage',
    title: 'Manage',
    line: 'We stay on after launch and look after it.',
    body: 'A website is not finished the day it goes live. We keep yours current and working, and you keep a direct line to the two people who built it.',
    includes: [
      'Changes to your words, photos and details when you need them',
      'Keeping the site up to date and working',
      'One point of contact: us',
    ],
  },
];

// How a project runs. The order is the order it happens in.
export const process = [
  { title: 'Questions, once', body: 'One organised list of everything we need. Answer what you know; anything you skip gets a sensible default and a note, not a delay.' },
  { title: 'Sitemap', body: 'The pages your business actually needs, sized to you. Fewer good pages beat many thin ones.' },
  { title: 'Words', body: 'Copy written from what is true about you. We never invent reviews, awards, prices or numbers.' },
  { title: 'Design', body: 'A visual direction made for your business, so it does not look like everyone else in your trade.' },
  { title: 'Build', body: 'Every page built mobile-first: responsive, accessible and quick to load.' },
  { title: 'Review', body: 'We check every link, every screen size, keyboard use, colour contrast and reduced-motion settings before you see it.' },
  { title: 'Handoff', body: 'A short guide in plain language: how to view your site, how to make simple edits, and what is left before launch.' },
  { title: 'Manage', body: 'After launch we keep it current and keep it working.' },
];
