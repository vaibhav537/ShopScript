import { styled } from "styled-components";
import Button from "./Button";
import { StyledCart } from "@/styles/FeaturedStyles";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div``;

const Title = styled(Link)`
  font-weight: normal;
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  margin: 0;
`;

const WhiteBox = styled(Link)`
  background-color: #f6f6ef;
  padding: 20px;
  border-radius: 5px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 130px;
  }
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
`;

export default function ProductBox({ _id, title, price, description, images }) {
  const { addProduct } = useContext(CartContext);
  const formatter = new Intl.NumberFormat("en-IN");
  const formattedPrice = formatter.format(price);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>&#x20b9; {formattedPrice}</Price>
          <Button onClick={() => addProduct(_id)} dark={1}>
            <StyledCart />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
