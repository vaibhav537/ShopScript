import { mongooseCoonect } from "@/lib/mongoose";
import { Order } from "@/models/OrderSchema";

export default async function handler(req, res) {
  await mongooseCoonect();

  res.json(await Order.find().sort({ createdAt: -1 }));
}
