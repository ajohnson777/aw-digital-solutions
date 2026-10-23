// Vercel serverless function: POST /api/create-checkout-session
// Creates a Stripe-hosted Checkout Session and redirects the visitor to it.
// Not linked from the site yet. See STRIPE_INTEGRATION_TODO.md.
import Stripe from 'stripe';

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return new Response('Checkout is not set up yet.', { status: 503 });
  }
  // API version left unset on purpose: the SDK's pinned default is used.
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // TODO: set to "subscription" for a recurring product (e.g. a Manage plan).
  const mode = 'payment';

  const params = {
    ui_mode: 'hosted_page',
    mode,
    billing_address_collection: 'auto',
    phone_number_collection: { enabled: false },
    automatic_tax: { enabled: false },
    allow_promotion_codes: false,
    submit_type: 'auto',
    integration_identifier: 'hosted_web_0001',
    origin_context: 'web',
    // TODO: replace placeholders (see STRIPE_INTEGRATION_TODO.md).
    success_url: `${process.env.DOMAIN}/success/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.DOMAIN}/contact/`,
    line_items: [{ price: 'price_...', quantity: 1 }],
  };
  if (mode === 'subscription') params.payment_method_collection = 'always';

  try {
    const session = await stripe.checkout.sessions.create(params);
    return Response.redirect(session.url, 303);
  } catch (err) {
    console.error('Checkout Session failed:', err.message);
    return new Response('Checkout is unavailable right now.', { status: 500 });
  }
}
