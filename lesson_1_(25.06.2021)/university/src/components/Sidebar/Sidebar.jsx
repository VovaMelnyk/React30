import React from "react";
import { Aside, Header, MenuItem, Menu, Text, Link } from "./Sidebar.styles";
import { menuConfig } from "../../utils/menu";
// import { NavLink, Link } from "react-router-dom";
function Sidebar() {
  console.log("menuConfig :>> ", menuConfig);
  return (
    <Aside>
      <Header></Header>
      <Menu>
        {menuConfig.map(({ name, icon, path }) => (
          <MenuItem key={name}>
            <Link to={path} exact>
              {icon} <Text>{name}</Text>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Aside>
  );
}

export default Sidebar;
