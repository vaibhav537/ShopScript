import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: String,
      required: true,
    },
    images: {
      type: [{ type: String }],
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

export const Product = mongoose.model("Product", ProductSchema);
