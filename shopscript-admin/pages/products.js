import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { useEffect, useState } from "react";

export default function products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Link
          href={"products/new"}
          className="bg-black select-none outline-none w-96 flex items-center justify-center hover:bg-slate-300 hover:text-black hover:shadow-5xl font-bold transition-all duration-500  rounded-md text-white p-2"
        >
          Add new product
        </Link>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto z-10 mt-10">
        <table className="table-auto w-full text-left whitespace-no-wrap rounded-3xl   ">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium  text-sm bg-slate-800 rounded-tl rounded-bl">
                Sr.No.
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium  text-sm bg-slate-800">
                Product Name
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-sm rounded-tr bg-slate-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-3">{index + 1}.</td>
                  <td className="px-4 py-3">{product.title}</td>
                  <td className="px-4  py-3">
                    <Link
                      href={"/products/edit/" + product._id}
                      className="btn-default"
                    >
                      <HiPencil /> Edit
                    </Link>
                    <Link
                      href={"/products/delete/" + product._id}
                      className="btn-default"
                    >
                      <IoMdTrash />
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
