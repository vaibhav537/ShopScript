import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toastConfig } from "@/config/toastConfig";
import toast, { Toaster } from "react-hot-toast";

export default function DeleteProductPage() {
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/products");
  }

  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    toast.success("Product Deleted !!.", toastConfig);
    setTimeout(() => {
      goBack();
    }, 3000);
  }
  return (
    <Layout>
      <Toaster />
      <h1 className="text-xl mb-5 select-none text-center">
        Do You Really want to delete "
        <b className="capitalize">{productInfo?.title}</b>" ?
      </h1>{" "}
      <div className="flex gap-2 justify-center">
        <button onClick={deleteProduct} className="btn-red">
          Yes
        </button>
        <button onClick={goBack} className="btn-default">
          No{" "}
        </button>
      </div>
    </Layout>
  );
}
