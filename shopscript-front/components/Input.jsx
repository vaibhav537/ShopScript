import { styled } from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  border: solid #aaa;
  border-width: 3px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem;
  outline: none;
  font-size: 20px;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
