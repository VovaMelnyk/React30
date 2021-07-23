import React from "react";
import { Link } from "react-router-dom";
import data from "../../../data/university.json";
import {
  Container,
  Item,
  ItemContact,
  ItemContacts,
  ItemInfo,
  Options,
} from "./TutorsList.styled";
function TutorsList() {
  const { tutors } = data;
  return (
    <Container>
      {tutors.map((tutor) => (
        <Item key={tutor.email}>
          <ItemInfo>
            <Link to={`/tutors/${tutor.id}`}>
              {tutor.lastName} {tutor.firstName} {tutor.patronymic}
            </Link>
          </ItemInfo>
          <ItemContacts>
            <ItemContact>{tutor.phone}</ItemContact>
            <ItemContact>{tutor.email}</ItemContact>
            <ItemContact>{tutor.city}</ItemContact>
          </ItemContacts>
          <Options>{tutor.options}</Options>
        </Item>
      ))}
    </Container>
  );
}

export default TutorsList;
