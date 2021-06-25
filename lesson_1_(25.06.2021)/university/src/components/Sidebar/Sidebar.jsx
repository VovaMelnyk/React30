import React from "react";
import { Aside, Header, MenuItem, Menu, Text } from "./Sidebar.styles";
import { menuConfig } from "../../utils/menu";
function Sidebar() {
  console.log("menuConfig :>> ", menuConfig);
  return (
    <Aside>
      <Header></Header>
      <Menu>
        {menuConfig.map(({ name, icon }) => (
          <MenuItem key={name}>
            {icon} <Text>{name}</Text>
          </MenuItem>
        ))}
      </Menu>
    </Aside>
  );
}

export default Sidebar;
