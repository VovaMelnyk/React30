import React from "react";
import Paper from "../../Paper/Paper";
import data from "../../../data/university.json";
import { Container, Text } from "./DepartmentsList.styled";
function DepartmentsList() {
  return (
    <Container>
      {data.department.map((department) => (
        <Paper key={department.name}>
          <Text>{department.name}</Text>
        </Paper>
      ))}
    </Container>
  );
}

export default DepartmentsList;
