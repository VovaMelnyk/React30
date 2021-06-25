import styled from "@emotion/styled";

export const Aside = styled.aside`
  background-color: #fff;
`;

export const Header = styled.header`
  background-color: #161d2a;
  height: 80px;

  &:hover {
    background-color: red;
  }
`;

export const Menu = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    & svg {
      fill: #ff6b0a;
    }
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
