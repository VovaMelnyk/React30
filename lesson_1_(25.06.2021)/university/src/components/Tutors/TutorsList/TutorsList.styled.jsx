import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 130px 270px 1fr;
  grid-column-gap: 24px;
  align-items: center;
  margin-bottom: 24px;
  background-color: #fff;
  padding: 16px;
`;

export const ItemInfo = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const ItemContacts = styled.div`
  margin-bottom: 8px;
`;

export const ItemContact = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const Options = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
