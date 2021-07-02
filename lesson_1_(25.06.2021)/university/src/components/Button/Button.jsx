import React from "react";
import { CustomButton } from "./Button.styled";
function Button({ text, onClick }) {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
}

export default Button;
