import { ProductsGrid, Title } from "@/styles/NewProductsStyles";
import Center from "./Center";
import ProductBox from "./ProductBox";

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
