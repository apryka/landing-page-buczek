import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 12px 28px;
  background-color: #ea5a00;
  color: #fff;
  text-decoration: none;
  border-radius: 53px;
  cursor: pointer;
  min-width: 222px;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #cc4e00;
  }
`;

export { Button };
