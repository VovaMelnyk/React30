import React from "react";
import TutorList from "./TutorsList/TutorsList";
import Button from "../Button/Button";
import { Container, Box, Title, Img } from "./Tutors.styled";
import src from "./img/cat.png";
function Tutors() {
  return (
    <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Преподаватели</Title>
      </Box>
      <TutorList />
      <Button text={"Добавить преподавателя"} />
    </Container>
  );
}

export default Tutors;
