import React from "react";
import PropTypes from "prop-types";
import { Box } from "./Test.styles";
function Test({ text }) {
  return <Box primary>{text}</Box>;
}

Test.propTypes = {
  text: PropTypes.string,
};

export default Test;
