import React from "react";
import styled from "styled-components";

import Button from "../components/UI/Button";
import Input from "../components/UI/input";
import TextArea from "../components/UI/textarea";

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

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;

  @media ${props => props.theme.mediaQueries.medium} {
    margin-bottom: 8rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 6rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Contact = () => {
  return (
    <StyledSection id="contact">
      <Contained>
        <Wrapper>
          <Heading title="Contact me" />
          <FormWrapper>
            <StyledForm
              action="https://formspree.io/akshay.gulhane@outlook.com"
              method="POST"
            >
              <Input placeholder="Your Name.." name="name"/>
              <Input placeholder="Your Email.." name="email"/>
              <TextArea placeholder="Your Message! " name="message"/>
              <Button>Submit</Button>
            </StyledForm>
          </FormWrapper>
          <Social />
          <CopyRight>Copyright © {new Date().getFullYear()}, Akshay</CopyRight>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Contact;
