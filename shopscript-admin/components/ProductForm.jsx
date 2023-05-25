import axios from "axios";
import { useRouter } from "next/router";
import { toastConfig } from "@/config/toastConfig";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiUpload } from "react-icons/fi";
import { ReactSortable } from "react-sortablejs";
import Spinner from "./Spinner";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProduct, setGoToProduct] = useState(false);
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [category, setCategory] = useState(assignedCategory || "");

  const router = useRouter();

  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const saveProduct = async (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    };

    if (_id) {
      //update
      const res = await axios.put("/api/products", { ...data, _id });
      if (res.statusText === "OK") {
        toast.success("Product Updated !!.", toastConfig);
        setGoToProduct(true);
      }
    } else {
      //create

      const res = await axios.post("/api/products", data);

      if (res.statusText === "OK") {
        toast.success("Product Added !!.", toastConfig);
        setGoToProduct(true);
      }
    }
  };

  if (goToProduct) {
    router.push("/products");
  }

  async function uploadImages(event) {
    const files = event.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(images) {
    setImages(images);
  }

  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];

  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?._id) {
      const parentCat = categories.find(
        ({ _id }) => _id === catInfo?.parent?._id
      );
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    <form
      className="lg:w-2/6 md:w-1/2 md:ml-20 md:mt-10 bg-gray-500  shadow-2xl bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10 "
      onSubmit={saveProduct}
    >
      <Toaster />
      <label htmlFor="title">Product Name</label>
      <input
        type="text"
        placeholder="Product Name"
        value={title}
        id="title"
        name="title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        name="category"
        className="bg-slate-700 hover:bg-slate-600 text-slate-300 mr-5 p-2 rounded-lg ring-1 focus:ring-2 focus:ring-slate-300 transition-all duration-500 ring-slate-500  outline-none focus:outline-none"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        id="category"
      >
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((c, index) => (
            <option key={index} value={c._id}>
              {c.name}
            </option>
          ))}
      </select>
      <div className="my-2">
        {propertiesToFill.length > 0 &&
          propertiesToFill.map((p) => (
            <div>
              <label>{p.name[0].toUpperCase()+p.name.substring(1)} :</label>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
                className="border border-slate-300 bg-slate-700 hover:bg-slate-600 text-slate-300 mr-5 py-[3px] text-xs rounded flex items-center justify-center px-3 ring-1 focus:ring-1 focus:ring-slate-300 transition-all duration-500 ring-slate-500 outline-none focus:outline-none"
              >
                {p.values.map((v) => (
                  <option value={v}>{v}</option>
                ))}
              </select>
            </div>
          ))}
      </div>
      <label htmlFor="photos">Photos <span className="text-xs">(Provide image with no background so product looks prettier)</span> </label>
      <div className="mb-2 flex flex-wrap gap-2">
        <ReactSortable
          className="flex flex-wrap gap-2 "
          list={images}
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div key={link} className="h-24">
                <img src={link} alt="..." className="rounded-lg" />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
          <div className="w-28 h-24 bg-gray-700 text-sm flex items-center justify-center p-2 rounded-lg flex-col">
            <Spinner /> <span className="my-2">Uploading ....</span>{" "}
          </div>
        )}
        <label className="w-24 flex-col h-24 hover:shadow-xl transition-all duration-500 hover:bg-slate-700 hover:text-base cursor-pointer justify-center rounded-lg bg-gray-800 flex items-center text-sm gap-2 text-gray-100">
          {" "}
          <FiUpload /> <div>Add Image</div>
          <input
            type="file"
            accept="image/*"
            onChange={uploadImages}
            className="hidden"
          />
        </label>
        {!images?.length && (
          <div className="bg-slate-800 ml-5 flex items-center justify-center p-3 rounded-lg">
            No Photos of this product
          </div>
        )}
      </div>
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        value={description}
        id="description"
        name="description"
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <label htmlFor="price">Price (in INR)</label>
      <input
        type="number"
        placeholder="Price"
        id="price"
        name="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type="submit" className="btn-default mt-10">
        Save
      </button>
    </form>
  );
}
