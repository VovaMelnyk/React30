import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../Main/Main.styles";

function TutorPage() {
  const { name } = useParams();

  useEffect(() => {
    fetch(`https//myserver/${name}`);
  }, []);

  console.log("name :>> ", name);

  return (
    <MainContainer>
      <h1>TutorPage</h1>
    </MainContainer>
  );
}

export default TutorPage;
