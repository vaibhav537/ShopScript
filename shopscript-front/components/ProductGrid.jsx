import { StyledProductsGrid } from "@/styles/NewProductsStyles";
import ProductBox from "./ProductBox";

export default function ProductGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox {...product} key={product._id} />
        ))}
    </StyledProductsGrid>
  );
}
