import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import { Wrapper } from "./styles";

export default function defaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
defaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
