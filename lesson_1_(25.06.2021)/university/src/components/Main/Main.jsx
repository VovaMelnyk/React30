import React from "react";
import { MainContainer } from "./Main.styles";
import Info from "../Info/Info";
import PageHeader from "../PageHeader/PageHeader";
import Tutors from "../Tutors/Tutors";
import Cities from "../Cities/Cities";
import Departments from "../Departments/Departments";
function Main() {
  return (
    <MainContainer>
      <PageHeader />
      <Info />
      <Tutors />
      <Cities />
      <Departments />
    </MainContainer>
  );
}

export default Main;
