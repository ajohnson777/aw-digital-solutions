// AW Digital Solutions — interaction and motion.
// Everything here is an enhancement: with this file missing,
// every page still reads, links and submits.

const root = document.documentElement;
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.__awReady = true;

/* ── Drawing index (menu overlay) ───────────────────────────── */
const dialog = document.getElementById('drawing-index');
const toggle = document.querySelector('.index-toggle');
const closeBtn = dialog?.querySelector('.index-close');
const outside = () => document.querySelectorAll('body > header, body > main, body > footer, body > aside, body > .skip');
const setInert = (on) => outside().forEach((el) => el.toggleAttribute('inert', on));

function origin() {
  const r = toggle.getBoundingClientRect();
  return `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
}

function openIndex() {
  if (dialog.open) return;
  dialog.showModal();
  setInert(true);
  root.classList.add('index-open');
  toggle.setAttribute('aria-expanded', 'true');
  if (!reduce()) {
    const at = origin();
    dialog.animate(
      [{ clipPath: `circle(0% at ${at})` }, { clipPath: `circle(150% at ${at})` }],
      { duration: 720, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' }
    );
    dialog.querySelectorAll('.index-list li').forEach((li, i) => {
      li.animate(
        [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }],
        { duration: 700, delay: 220 + i * 60, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' }
      );
    });
  }
  closeBtn.focus();
}

let closing = false;
async function closeIndex() {
  if (!dialog.open || closing) return;
  closing = true;
  if (!reduce()) {
    const at = origin();
    const anim = dialog.animate(
      [{ clipPath: `circle(150% at ${at})` }, { clipPath: `circle(0% at ${at})` }],
      { duration: 480, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' }
    );
    await anim.finished.catch(() => {});
  }
  dialog.close();
  setInert(false);
  root.classList.remove('index-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.focus();
  closing = false;
}

if (dialog && toggle) {
  toggle.addEventListener('click', openIndex);
  closeBtn.addEventListener('click', closeIndex);
  // Escape: animate out instead of the instant native close.
  dialog.addEventListener('cancel', (e) => { e.preventDefault(); closeIndex(); });
  // Keep Tab inside the menu.
  dialog.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const f = [...dialog.querySelectorAll('a[href], button:not([disabled])')];
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  // Same-page link (e.g. Home while on Home): just close.
  dialog.querySelectorAll('a[aria-current="page"]').forEach((a) =>
    a.addEventListener('click', (e) => { e.preventDefault(); closeIndex(); })
  );
}

/* ── Scroll reveals ─────────────────────────────────────────── */
// Drafting: each stroke is drawn in its own order (--d, in ms).
function draw(fig) {
  fig.querySelectorAll('[pathLength]').forEach((el) => {
    const delay = parseFloat(el.style.getPropertyValue('--d')) || 0;
    el.animate(
      [{ strokeDasharray: '1', strokeDashoffset: '1' }, { strokeDasharray: '1', strokeDashoffset: '0' }],
      { duration: 1400, delay, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'backwards' }
    );
  });
  fig.classList.add('drawn');
}
// A section's content settles only once its rule has finished drawing.
const RULE_MS = 700;
function reveal(el) {
  const rule = el.dataset.reveal === 'rule' ? null : el.closest('.wrap')?.querySelector(':scope > .rule[data-reveal]');
  if (el.dataset.reveal === 'rule') el.dataset.drawnAt = String(performance.now());
  let wait = 0;
  if (rule && rule.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) {
    const at = Number(rule.dataset.drawnAt || 0);
    wait = at ? Math.max(0, at + RULE_MS - performance.now()) : RULE_MS;
  }
  const go = () => { el.classList.add('is-in'); if (el.hasAttribute('data-draw')) draw(el); };
  wait ? setTimeout(go, wait) : go();
}
const revealables = document.querySelectorAll('[data-reveal], [data-draw]');
if ('IntersectionObserver' in window && root.classList.contains('motion-ok')) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { io.unobserve(e.target); reveal(e.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}

/* ── Live measurements: numbers measured, never claimed ─────── */
function contrast(a, b) {
  const lum = (rgb) => {
    const [r, g, bl] = rgb.match(/[\d.]+/g).slice(0, 3).map((v) => {
      v = v / 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function measure() {
  const out = {};
  const nav = performance.getEntriesByType('navigation')[0];
  const res = performance.getEntriesByType('resource');
  if (nav) {
    const bytes = [nav, ...res].reduce((t, e) => t + (e.transferSize || e.encodedBodySize || 0), 0);
    if (bytes > 0) out.weight = `${Math.max(1, Math.round(bytes / 1024))} KB`;
    if (nav.domContentLoadedEventEnd > 0) out.ready = `${Math.round(nav.domContentLoadedEventEnd)} ms`;
  }
  out.motion = reduce() ? 'Reduced, as you asked' : 'Full';
  const cs = getComputedStyle(document.body);
  out.contrast = `${contrast(cs.color, cs.backgroundColor).toFixed(1)} : 1`;
  document.querySelectorAll('[data-measure]').forEach((el) => {
    const v = out[el.dataset.measure];
    if (v) el.textContent = v;
  });
}
if (document.querySelector('[data-measure]')) {
  if (document.readyState === 'complete') measure();
  else window.addEventListener('load', () => setTimeout(measure, 60));
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change', measure);
}

/* ── Contact form ───────────────────────────────────────────── */
const form = document.querySelector('form[data-inquiry]');
if (form) {
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');
  const connected = form.dataset.connected === 'true';
  const messages = {
    name: 'Tell us your name so we know who to reply to.',
    email: 'We need an email address to reply. Check it looks like name@example.com.',
    message: 'Add a sentence or two about what you need.',
  };

  const check = (input) => {
    const err = form.querySelector(`#${input.id}-error`);
    if (!err) return true;
    const ok = input.checkValidity() && input.value.trim() !== '' || !input.required;
    input.setAttribute('aria-invalid', ok ? 'false' : 'true');
    err.innerHTML = ok ? '' : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4v.1"/></svg>${messages[input.name]}`;
    return ok;
  };

  form.setAttribute('novalidate', '');
  form.querySelectorAll('[required]').forEach((input) => {
    input.addEventListener('blur', () => { if (input.value) check(input); });
    input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') check(input); });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const required = [...form.querySelectorAll('[required]')];
    const bad = required.filter((i) => !check(i));
    if (bad.length) { bad[0].focus(); return; }

    status.dataset.kind = '';
    if (!connected) {
      status.dataset.kind = 'error';
      status.textContent = `This form isn't connected yet, so nothing was sent. Please email ${form.dataset.email} for now.`;
      status.focus();
      return;
    }
    submit.setAttribute('aria-busy', 'true');
    submit.disabled = true;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.dataset.kind = 'ok';
      status.textContent = "Thanks, it's sent. We'll reply by email.";
    } catch {
      status.dataset.kind = 'error';
      status.textContent = `That didn't go through. Your message is still here, so try again, or email ${form.dataset.email}.`;
    } finally {
      submit.removeAttribute('aria-busy');
      submit.disabled = false;
      status.focus();
    }
  });
}

/* ── Dock CTA: no duplicate while the hero's own button is on screen ── */
const heroActions = document.querySelector('.hero .actions');
const block = document.querySelector('.title-block');
if (heroActions && block && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => block.classList.toggle('cta-hidden', e.isIntersecting)).observe(heroActions);
}
