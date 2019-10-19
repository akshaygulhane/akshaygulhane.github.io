import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

const StyledTextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  color: var(--primary);
  text-transform: uppercase;
  font-family: inherit;
  border-radius: 3px;
`;

const TextArea = ({ children, ...rest }) => (
  <StyledTextArea {...rest}>{children}</StyledTextArea>
);


export default TextArea;