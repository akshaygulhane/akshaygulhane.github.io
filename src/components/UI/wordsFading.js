import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";

const WORDS = [
  { id: 0, text: "Full Stack Developer" },
  { id: 1, text: "Technology Consultant" },
  { id: 2, text: "Mentor" }
];

const Wrapper = styled.div`
  font-weight: 600;
  width: 30vw;
  position: relative;
  display: inline-block;
  text-align: left;
  font-style: italic;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  & span {
    text-align: left;
    width: 100%;
  }

  @media ${props => props.theme.mediaQueries.large} {
    width: 50vw !important;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 50vw !important;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 50vw !important;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 50vw !important;
  }
`;

const WordsFading = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0);
  const wordsTransition = useTransition(WORDS[index], span => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: "translateY(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transform: "translateY(-10px)"
    }
  });
  useEffect(
    () =>
      void setInterval(
        () => setIndex(current => (current + 1) % WORDS.length),
        2500
      ),
    []
  );
  return (
    <Wrapper>
      <i style={{ visibility: "hidden" }}>an</i>
      {wordsTransition.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </Wrapper>
  );
};

export default WordsFading;
