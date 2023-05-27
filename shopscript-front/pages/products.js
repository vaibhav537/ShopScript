import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { mongooseCoonect } from "@/lib/mongoose";
import { Product } from "@/models/ProductSchema";
import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
`;

export default function products({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>ALL PRODUCTS</Title>
        <ProductGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseCoonect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
