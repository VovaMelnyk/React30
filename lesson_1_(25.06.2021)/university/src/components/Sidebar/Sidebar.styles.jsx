import styled from "@emotion/styled";

export const Aside = styled.aside`
  background-color: #fff;
`;

export const Header = styled.header`
  background-color: #161d2a;
  height: 80px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 24px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 24px;

  & svg {
    fill: #ff6b0a;
    width: 24px;
    height: 24px;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #010101;
  margin-left: 16px;

  &:hover {
    color: #ff6b0a;
  }
`;
