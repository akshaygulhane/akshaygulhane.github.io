import React from "react";
import styled from "styled-components";

import {
  Contained,
  StyledSection,
  Wrapper
} from "../components/layout/elements";
import Heading from "../components/UI/heading";
import Social from "../components/UI/social";

const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;

const Contact = () => {
  return (
    <StyledSection id="contact">
      <Contained>
        <Wrapper>
          <Heading title="Contact me" />
          <Social />
          <CopyRight>
            Copyright © {new Date().getFullYear()}, Akshay Gulhane.
          </CopyRight>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Contact;
