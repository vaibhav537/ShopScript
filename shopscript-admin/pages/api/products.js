import { isAdminRequest } from "@/config/authConfig";
import { mongooseCoonect } from "@/lib/mongoose";
import { Product } from "@/models/ProductSchema";

export default async function handler(req, res) {
  await mongooseCoonect();
  await isAdminRequest(req, res);

  if (req.method === "POST") {
    const { title, description, price, images, category, properties } =
      req.body;

    const productDocument = await Product.create({
      title,
      description,
      price,
      images,
      category,
      properties,
    });

    res.json(productDocument);
  }

  if (req.method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (req.method === "PUT") {
    const { title, description, price, images, _id, category, properties } =
      req.body;

    await Product.updateOne(
      { _id },
      { title, description, price, images, category, properties }
    );
    res.json(true);
  }

  if (req.method === "DELETE") {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
}
