import React from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import PropTypes from "prop-types";
import Paper from "../Paper/Paper";
import { OrganizationType, Name, Actions, Image } from "./Card.styles";

function Card({ name }) {
  return (
    <Paper gap={32}>
      <Image src="./images/logo.png" alt="logo" />
      <OrganizationType>университет</OrganizationType>
      <Name>{name}</Name>
      <Actions>
        <HiPencilAlt size={16} />
        <HiTrash size={16} />
      </Actions>
    </Paper>
  );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Card;
