import styled from "@emotion/styled";

export const Box = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;
