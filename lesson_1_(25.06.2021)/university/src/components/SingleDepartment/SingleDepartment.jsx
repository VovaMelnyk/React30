import React from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../Main/Main.styles";

function SingleDepartment() {
  const { name } = useParams();
  return (
    <MainContainer>
      <h1>{name}</h1>
    </MainContainer>
  );
}

export default SingleDepartment;
