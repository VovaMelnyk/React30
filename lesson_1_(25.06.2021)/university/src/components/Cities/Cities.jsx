// import React from "react";
// import Button from "../Button/Button";
// import { Container, Box, Img, Title } from "./Cities.styled";
// import CitiesList from "./CitiesList/CitiesList";
// import src from "./img/pin.png";
// function Cities() {
//   const click = () => {
//     console.log("Hello");
//   };

//   return (
//     <Container>
//       <Box>
//         <Img src={src} alt="cat" />
//         <Title>Города</Title>
//       </Box>
//       <CitiesList />
//       <Button text={"Добавить город"} onClick={click} />
//       {/* <form>
//         <input type="text" onChange={onChange} value={input} />
//       </form> */}
//     </Container>
//   );
// }

// export default Cities;

import React, { Component } from "react";
import Button from "../Button/Button";
import { Container, Box, Img, Title } from "./Cities.styled";
import CitiesList from "./CitiesList/CitiesList";
import data from "../../data/university.json";
import Form from "../Form/Form";
import src from "./img/pin.png";
export default class Cities extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isShow: false,
  //   };

  //   this.handlerClick = this.handlerClick.bind(this);
  // }

  // handlerClick() {
  //   // console.log(this);
  //   this.setState((prevState) => ({
  //     isShow: !prevState.isShow,
  //   }));
  // }

  state = {
    isShow: false,
    cities: data.cities,
  };

  handlerClick = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  addCity = () => {
    this.setState((prev) => ({
      cities: [...prev.cities, "Ню йорк"],
    }));
  };

  render() {
    const { isShow, cities } = this.state;
    return (
      <Container>
        <Box>
          <Img src={src} alt="cat" />
          <Title>Города</Title>
        </Box>
        <CitiesList cities={cities} />
        <Button text={"Добавить город"} onClick={this.addCity} />
        {isShow && (
          <Form>
            <input type="text" />
          </Form>
        )}
      </Container>
    );
  }
}
