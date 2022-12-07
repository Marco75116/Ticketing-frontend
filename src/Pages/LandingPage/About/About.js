import React from "react";
import { Wrapper, ContainerContent, Title } from "./About.styled";

const About = (props) => {
  return (
    <Wrapper ref={props.refProp}>
      <ContainerContent>
        <Title>About</Title>
      </ContainerContent>
    </Wrapper>
  );
};

export default About;
