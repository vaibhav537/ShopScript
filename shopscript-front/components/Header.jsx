import { useContext } from "react";
import Center from "./Center";
import { Logo, NavLink, StyledHeader, StyledNav, Wrapper } from "@/styles/HeaderStyles";
import { CartContext } from "./CartContext";

export default function Header() {
  const {cartProducts}  = useContext(CartContext)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <img src="/MainLogo.png" alt="..." />
            ShopScript
          </Logo>
          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
