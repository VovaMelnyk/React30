import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { Container } from "./Wrapper.styles";
const Wrapper = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Wrapper;
