import styled from "@emotion/styled";

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
  display: block;
`;
export const OrganizationType = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 8px;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 24px);
  grid-column-gap: 32px;
`;
