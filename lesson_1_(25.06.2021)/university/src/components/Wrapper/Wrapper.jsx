import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { Container } from "./Wrapper.styles";
import DepartmentsPage from "../../DepartmentsPage/DepartmentsPage";
import SingleDepartment from "../SingleDepartment/SingleDepartment";
import TutorPage from "../TutorPage/TutorPage";
const Wrapper = () => {
  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/departments" exact>
          <DepartmentsPage />
        </Route>
        <Route path="/departments/:name">
          <SingleDepartment />
        </Route>
        <Route path="/tutors/:name">
          <TutorPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Wrapper;
