import React from "react";
import {
  HeaderContainer,
  ContentContainer,
  Title,
  Description,
  Button,
} from "./Header.styled";

const Header = (props) => {
  return (
    <HeaderContainer ref={props.refProp}>
      <ContentContainer>
        <Title>Football makes people happy.</Title>
        <Description>
          Bring blockchain technologie to football party to make the fan
          experience more enjoyable!
        </Description>
        <Button>View more </Button>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
