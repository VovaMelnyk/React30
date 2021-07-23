import React from "react";
import { Link } from "react-router-dom";
import Paper from "../../Paper/Paper";
import data from "../../../data/university.json";
import { Container, Text } from "./DepartmentsList.styled";
function DepartmentsList() {
  return (
    <Container>
      {data.department.map((department) => (
        <Paper key={department.name}>
          <Link to={`/departments/${department.name}`}>
            <Text>{department.name}</Text>
          </Link>
        </Paper>
      ))}
    </Container>
  );
}

export default DepartmentsList;
