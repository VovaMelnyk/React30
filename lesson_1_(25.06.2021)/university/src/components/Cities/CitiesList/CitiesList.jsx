import React from "react";
import Paper from "../../Paper/Paper";
import { Container, Text } from "./CitiesList.styled";
function CitiesList({ cities }) {
  return (
    <Container>
      {cities.map((city) => (
        <Paper key={city}>
          <Text>{city}</Text>
        </Paper>
      ))}
    </Container>
  );
}

export default CitiesList;
