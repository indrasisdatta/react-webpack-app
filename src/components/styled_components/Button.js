import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.backgroundcolor || "#BF4F74"};
  color: ${(props) => props.color || "#fff"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.backgroundcolor || "#BF4F74"};
  border-radius: 3px;
`;
