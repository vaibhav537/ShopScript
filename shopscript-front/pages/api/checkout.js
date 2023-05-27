import { mongooseCoonect } from "@/lib/mongoose";
import { Product } from "@/models/ProductSchema";
import { Order } from "@/models/Order";
const stripe = require("stripe")(process.env.STRIPE_SK);


export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("Should be an POST");
    return;
  }
  const {
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    cartProducts,
  } = req.body;
  await mongooseCoonect();
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productInfos = await Product.find({ _id: uniqueIds });

  const line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productInfos.find(
      (p) => p._id.toString() === productId
    );
    const Quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (Quantity > 0) {
      line_items.push({
        price_data: {
          currency: "INR",
          product_data: { name: productInfo.title },
          unit_amount: Quantity * productInfo.price * 100,
        },
        quantity: Quantity, // Add the 'quantity' field to each line item
      });
    }
  }
  const OrderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: OrderDoc._id.toString(),test:'ok' },
  });

  res.json({
    url: session.url,
  });
}
