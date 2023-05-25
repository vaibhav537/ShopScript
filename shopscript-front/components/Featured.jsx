import {
  Bg,
  Column,
  Desc,
  Flex,
  StyledBook,
  StyledCart,
  Title,
  Wrapper,
} from "@/styles/FeaturedStyles";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  console.log(product);

  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <Flex>
                <ButtonLink
                  href={"/products/" + product._id}
                  dark={1}
                  size="md"
                >
                  <StyledBook />
                  Read more
                </ButtonLink>
                <Button onClick={addFeaturedToCart} light={1} size="md">
                  <StyledCart />
                  <span>Add To Cart</span>
                </Button>
              </Flex>
            </div>
          </Column>
          <Column>
            <img src={product.images[0]} alt="" />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
