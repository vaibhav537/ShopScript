import { authConfig, isAdminRequest } from "@/config/authConfig";
import { mongooseCoonect } from "@/lib/mongoose";
import { Category } from "@/models/CategorySchema";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  await mongooseCoonect();
  await isAdminRequest(req, res);

  if (req.method === "DELETE") {
    const { _id } = req.query;

    await Category.deleteOne({ _id });
    res.json("x");
  }

  if (req.method === "PUT") {
    try {
      const { name, parentCategory, _id, properties } = req.body;
      const categoryDoc = await Category.updateOne(
        {
          _id,
        },
        {
          name,
          parent: parentCategory || undefined,
          properties,
        }
      );
      res.json(categoryDoc);
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "GET") {
    try {
      res.json(await Category.find().populate("parent"));
    } catch (e) {
      console.log(e);
    }
  }

  if (req.method === "POST") {
    try {
      const { name, parentCategory, properties } = req.body;
      const categoryDoc = await Category.create({
        name,
        parent: parentCategory || undefined,
        properties,
      });
      res.json(categoryDoc);
    } catch (error) {
      console.log(error);
    }
  }
}
