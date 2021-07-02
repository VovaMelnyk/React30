import React from "react";
import Button from "../Button/Button";
import { Container, Box, Img, Title } from "./Cities.styled";
import CitiesList from "./CitiesList/CitiesList";
import src from "./img/pin.png";
function Cities() {
  return (
    <Container>
      <Box>
        <Img src={src} alt="cat" />
        <Title>Города</Title>
      </Box>
      <CitiesList />
      <Button text={"Добавить город"} />
      {/* <form>
        <input type="text" onChange={onChange} value={input} />
      </form> */}
    </Container>
  );
}

export default Cities;

// import React, { Component } from "react";
// import Button from "../Button/Button";
// import { Container, Box, Img, Title } from "./Cities.styled";
// import CitiesList from "./CitiesList/CitiesList";
// import src from "./img/pin.png";
// export default class Cities extends Component {
//   state = {
//     value: "",
//   };

//   inputHandler = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   render() {
//     console.log("test", this.state.value);

//     return (
//       <Container>
//         <Box>
//           <Img src={src} alt="cat" />
//           <Title>Города</Title>
//         </Box>
//         <CitiesList />
//         <Button text={"Добавить город"} />
//         <form>
//           <input
//             type="text"
//             onChange={this.inputHandler}
//             value={this.state.value}
//             name="name"
//           />
//         </form>
//       </Container>
//     );
//   }
// }
