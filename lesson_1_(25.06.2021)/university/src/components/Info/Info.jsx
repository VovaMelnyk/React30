import React from "react";
import Card from "../Card/Card";
import data from "../../data/university.json";
import { Container, Text } from "./Info.styles";
import Paper from "../Paper/Paper";

function Info() {
  return (
    <Container>
      <Card name={data.name} />
      <Paper gap={32}>
        <Text>{data.description}</Text>
      </Paper>
    </Container>
  );
}

export default Info;
