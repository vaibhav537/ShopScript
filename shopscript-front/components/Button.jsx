import { styled, css } from "styled-components";
import { Comfortaa } from "next/font/google";

const inter = Comfortaa({ subsets: ["latin"] });

export const ButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  transition: all 0.5s ease-in-out;
  padding: 5px 15px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.light &&
    css`
      background-color: #d5cea3;
      color: #3c2a21;
      display: flex;
      &:hover {
        background-color: #2e2723;
        color: #d5cea3;
      }
    `}
  ${(props) =>
    props.dark &&
    css`
      background-color: #3c2a21;
      color: #d5cea3;
      &:hover {
        background-color: #fdf099;
        color: #3c2a21;
      }
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      font-size: 0.9rem;
      padding: 10px 20px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
    `}
    &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

export const StyledButton = styled.button`
${ButtonStyle}`;

export default function Button({ children, ...rest }) {
  return (
    <StyledButton className={inter.className} {...rest}>
      {children}
    </StyledButton>
  );
}
