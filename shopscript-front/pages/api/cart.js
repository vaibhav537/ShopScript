import { mongooseCoonect } from "@/lib/mongoose";
import { Product } from "@/models/ProductSchema";

export default async function handle(req, res) {
  await mongooseCoonect();
  const ids = req.body.ids;
  res.json(await Product.find({ _id: ids }));
}
