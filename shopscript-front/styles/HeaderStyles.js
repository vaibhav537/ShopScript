import Link from "next/link";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1a120b;
`;

export const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  font-size: 38px;
  align-items: center;
  gap: 1rem;
  img {
    filter: invert(1);
    width: 55px;
    height: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const NavLink = styled(Link)`
  color: #e5e5cb;
  text-decoration: none;
  transition: all 0.5s linear;
  &:hover {
    color: #bbbb77;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  font-size: 20px;
`;
