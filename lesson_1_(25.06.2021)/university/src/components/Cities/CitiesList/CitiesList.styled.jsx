import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 370px));
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
