import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

const NewProducts = () => {
  return (
    <Layout>
      <h1 className="text-xl md:ml-20">New Product</h1>
      <ProductForm />
    </Layout>
  );
};

export default NewProducts;
