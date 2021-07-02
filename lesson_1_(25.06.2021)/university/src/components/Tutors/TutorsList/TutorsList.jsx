import React from "react";
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
            {tutor.lastName} {tutor.firstName} {tutor.patronymic}
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
