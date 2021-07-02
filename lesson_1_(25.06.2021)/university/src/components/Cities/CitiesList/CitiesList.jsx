import React from "react";
import Paper from "../../Paper/Paper";
import data from "../../../data/university.json";
import { Container, Text } from "./CitiesList.styled";
function CitiesList() {
  return (
    <Container>
      {data.cities.map((city) => (
        <Paper key={city}>
          <Text>{city}</Text>
        </Paper>
      ))}
    </Container>
  );
}

export default CitiesList;
