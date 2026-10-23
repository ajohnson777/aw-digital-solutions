# Stripe Checkout: integration TODO

This is the single source of truth for finishing the Stripe integration.

> **Status:** the payment endpoint exists, but **nothing on the website links to it yet**. No prices are shown anywhere on the site, and none have been invented. Customers can't reach checkout until you finish the steps below and add a button (step 5).

## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**
- [api/create-checkout-session.js](api/create-checkout-session.js)
- [.env.example](.env.example) (copied to `.env` locally)

| Field | Current Value | What to Set |
|-------|--------------|-------------|
| mode | `payment` | `"payment"` for a one-time charge (e.g. a Build or Redesign deposit) or `"subscription"` for recurring billing (e.g. a monthly Manage plan). With `"subscription"`, `payment_method_collection: "always"` is added automatically. |
| success_url | `${DOMAIN}/success/?session_id={CHECKOUT_SESSION_ID}` | Your real post-payment page. **No `/success/` page exists yet**, so create one or point this at an existing page. Keep the `{CHECKOUT_SESSION_ID}` template. |
| cancel_url | `${DOMAIN}/contact/` | Where to send people who back out. The contact page is a sensible default; change it if you like. |
| line_items[].price | `price_...` | Your real Stripe Price ID from the [Dashboard](https://dashboard.stripe.com/prices) or the API. |
| STRIPE_SECRET_KEY | `sk_test_...` | Your secret key from [API keys](https://dashboard.stripe.com/test/apikeys). |
| DOMAIN | `http://localhost:3000` | Your live address with no trailing slash, e.g. `https://aw-digital-solutions.vercel.app`. |

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly.

**Files containing these parameters:**
- [api/create-checkout-session.js](api/create-checkout-session.js)

| Parameter | Value |
|-----------|-------|
| ui_mode | `hosted_page` (installed `stripe` SDK is 23.0.1, so ≥ 21.0.0) |
| billing_address_collection | `auto` |
| phone_number_collection | `{ enabled: false }` |
| automatic_tax | `{ enabled: false }` |
| allow_promotion_codes | `false` |
| payment_method_collection | `always` (only sent when `mode` is `subscription`) |
| submit_type | `auto` |
| integration_identifier | `hosted_web_0001` |
| origin_context | `web` |

## Setup

1. **Dependency:** `stripe` is already in `package.json`. Run `npm install` on a new machine.
2. **Keys in Vercel (production):** Project → Settings → Environment Variables. Add `STRIPE_SECRET_KEY` and `DOMAIN`, then redeploy. Use test keys (`sk_test_`) until you're ready to take real money.
3. **Keys locally:** edit `.env`, which git ignores. Never commit a real key, and never paste one into a chat.
4. **Run locally:** `npm run dev` serves the site but **not** the `api/` function. To test the endpoint locally, use the Vercel CLI: `npm i -g vercel`, then `vercel dev`.
5. **Add a button** where you want people to pay. A form-based button works without JavaScript:
   ```html
   <form action="/api/create-checkout-session" method="POST">
     <button class="btn btn--primary" type="submit">Pay deposit</button>
   </form>
   ```
   Only add this once a real price exists. The site's honesty rule (see `PRODUCT.md`) is that nothing is offered that can't actually be bought.

## Project structure (new files)

```
api/create-checkout-session.js   Vercel serverless function: creates the Checkout Session
.env.example                     Variable names to set (template, committed)
.env                             Your local copy (ignored by git)
STRIPE_INTEGRATION_TODO.md       This file
```

## How it works

1. A visitor presses a button that POSTs to `/api/create-checkout-session`.
2. The function creates a Checkout Session with the parameters above.
3. It answers with a 303 redirect to Stripe's hosted payment page.
4. After paying, Stripe sends them to `success_url`. If they cancel, they go to `cancel_url`.
5. If `STRIPE_SECRET_KEY` is missing, the endpoint returns *503 "Checkout is not set up yet."* instead of crashing.

## Testing

Use test-mode keys and these cards, with any future expiry date, any CVC and any postcode:

| Card | Result |
|------|--------|
| `4242 4242 4242 4242` | Succeeds |
| `4000 0025 0000 3155` | Requires 3D Secure authentication |
| `4000 0000 0000 9995` | Declined (insufficient funds) |

Successful test payments appear under [Dashboard → Payments](https://dashboard.stripe.com/test/payments).

## Next steps

- **Create your products and prices** in the Dashboard and put the Price ID in `line_items`. To sell several items, accept a price choice in the request and check it against an allow-list. Never trust a raw price ID sent from the browser.
- **Fulfillment / order tracking:** there's no webhook yet. When you need to react to payments automatically (emailing a receipt, starting a project), add an `api/webhook.js` that listens for `checkout.session.completed` and verifies it with `STRIPE_WEBHOOK_SECRET`. Until then, the Stripe Dashboard and its email notifications are your order log.
- **Privacy page:** once payments are live, update `/privacy/` to say Stripe processes payment details.
- **Tax:** `automatic_tax` is off. Check with an accountant whether you need to collect sales tax or VAT.

## Resources

- https://support.stripe.com
- https://docs.stripe.com/mcp
