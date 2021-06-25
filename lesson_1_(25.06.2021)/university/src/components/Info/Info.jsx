import React from "react";
import Card from "../Card/Card";
import data from "../../data/university.json";
import { Container } from "./Info.styles";
import Paper from "../Paper/Paper";

function Info() {
  return (
    <Container>
      <Card name={data.name} />
      <Paper>{data.description}</Paper>
    </Container>
  );
}

export default Info;
