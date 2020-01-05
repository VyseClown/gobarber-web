import React from "react";
import PropTypes from "prop-types";

import Header from "~/components/Header";

// eslint-disable-next-line import/no-unresolved
import { Wrapper } from "./styles";

export default function defaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
defaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
