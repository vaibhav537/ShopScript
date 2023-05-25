import Link from "next/link";
import { styled } from "styled-components";

export const EmptyCartMessage = styled.div`
  font-size: 40px;
  text-align: center;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;
export const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  outline: none;
  padding: 15px 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;

  transition: all 0.5s linear;
  &:hover {
    background-color: #ccc;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
export const Box = styled.div`
  background-color: #fff;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
export const ProductInfoCell = styled.td`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;
export const StyledQuantityButton = styled.button`
  background-color: #aaa;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  height: 20px;
  width: 20px;
  border: none;
  transition: all 0.5s linear;
  &:hover {
    background-color: #000;
    color: #aaa;
  }
`;
export const QuantityLabel = styled.span`
  padding: 0 7px;
`;
export const PriceTd = styled.td`
  font-size: 21px;
`;
export const ProductTitleBox = styled.span`
  font-size: 15px;
  margin-left: 1rem;
`;
export const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export const PaymentH1 = styled.h1`
  font-size: 50px;
  margin-top: 20rem;
  text-align: center;
`;

export const PaymentH5 = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #aaa;
`;
export const PaymentP = styled.h1`
  font-size: 20px;
  color: #aaa;
  margin-bottom: 20rem;
  text-align: center;
`;

export const PaymentSpan = styled.span`
  text-align: right;
  font-size: 20px;
`;

export const GobackButton = styled(Link)`
  background-color: #000;
  color: #fff;
  outline: none;
  text-decoration: none;
  padding: 15px 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 40px;
  transition: all 0.5s linear;
  &:hover {
    background-color: #ccc;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
