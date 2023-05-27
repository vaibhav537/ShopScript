import { Title } from "@/styles/NewProductsStyles";
import Center from "./Center";
import ProductGrid from "./ProductGrid";
export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductGrid products={products} />
    </Center>
  );
}
