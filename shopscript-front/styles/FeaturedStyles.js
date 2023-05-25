import { styled } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";

export const Bg = styled.div`
  background-color: #1a120b;
  color: #fff;
  padding: 50px 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

export const StyledCart = styled(FiShoppingCart)`
  font-size: 18px;
  margin-right: 5px;
`;

export const StyledBook = styled(BiNotepad)`
  font-size: 18px;
  margin-right: 5px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const Desc = styled.p`
  color: #e5e5cb;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1.1fr 0.9fr;
  img {
    max-width: 100%;
    height: 20rem;
    margin-left: 10rem;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;
