import { mongooseCoonect } from "@/lib/mongoose";
const stripe = require("stripe")(process.env.STRIPE_SK);
import { buffer } from "micro";

const endpointSecret =
  "whsec_7a4dcf02ff638a4309612123a67d73000fe9f866c9537ba2f061930adaa3ea5b";

export default async function handler(req, res) {
  await mongooseCoonect();

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      console.log(paymentIntentSucceeded);
      break;
      console.log(`Unhandled event type ${event.type}`);
  }
}

export const config = {
  api: { bodyParser: false },
};
