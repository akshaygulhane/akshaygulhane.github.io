import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

const StyledInput = styled(animated.input)`
  padding: 0.5em;
  margin: 0.5em;
  color: var(--primary);
  text-transform: uppercase;
  font-family: inherit;
  border-radius: 3px;
`;

const Input = ({ children, ...rest }) => (
  <StyledInput {...rest}>{children}</StyledInput>
);

export default Input;

