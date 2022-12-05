import React from "react";
import {
  HeaderContainer,
  ContentContainer,
  Title,
  Description,
  Button,
} from "./Header.styled";
import imgSrc from "../../../assets/stadium.jpg";

const Header = () => {
  return (
    <HeaderContainer>
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
