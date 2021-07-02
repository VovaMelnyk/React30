// import React from "react";
// import TutorList from "./TutorsList/TutorsList";
// import Button from "../Button/Button";
// import { Container, Box, Title, Img } from "./Tutors.styled";
// import src from "./img/cat.png";
// function Tutors() {
//   return (
//     <Container>
//       <Box>
//         <Img src={src} alt="cat" />
//         <Title>Преподаватели</Title>
//       </Box>
//       <TutorList />
//       <Button text={"Добавить преподавателя"} />
//     </Container>
//   );
// }

// export default Tutors;

import React, { Component } from "react";
import TutorList from "./TutorsList/TutorsList";
import Button from "../Button/Button";
import { Container, Box, Title, Img } from "./Tutors.styled";
import src from "./img/cat.png";
import Form from "../Form/Form";

export default class Tutors extends Component {
  state = {
    isFormShow: false,
    lastName: "",
    firstName: "",
    patreonomic: "",
    phone: "",
    email: "",
    city: "",
  };

  toggleForm = () => {
    this.setState((prev) => ({
      isFormShow: !prev.isFormShow,
    }));
  };

  handleChange = (e) => {
    const value = e.target.value;
    // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.target);
    // console.log("e.target.name :>> ", e.target.name);
    const name = e.target.name;
    this.setState({
      [name]: value, // city: value // phone: value
    });
  };

  handleSubmit = (e) => {
    const { firstName, lastName, phone, email, patreonomic, city } = this.state;
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      phone,
      patreonomic,
      city,
      email,
    });
  };

  render() {
    const { isFormShow, lastName, firstName, phone, patreonomic, city, email } =
      this.state;
    return (
      <Container>
        <Box>
          <Img src={src} alt="cat" />
          <Title>Преподаватели</Title>
        </Box>
        <TutorList />
        <Button
          text={isFormShow ? "Закрть форму" : "Добавить преподавателя"}
          onClick={this.toggleForm}
        />
        {isFormShow && (
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="patreonomic"
              placeholder="patreonomic"
              value={patreonomic}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="city"
              value={city}
              onChange={this.handleChange}
            />
          </Form>
        )}
      </Container>
    );
  }
}
