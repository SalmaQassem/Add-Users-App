import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 6px;
  color: #fff;
  background-color: #4a0c54;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: #5a0e66;
  }
`;

export default Button;
