import React from "react";
import {
  NavigationContainer,
  ContentContainer,
  Brand,
  Item,
  Menu,
  Button,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ContentContainer>
        <Brand>Sporty</Brand>
        <Menu>
          <Item>FEATURES</Item>
          <Item>ABOUT</Item>
          <Item>SERVICES</Item>
          <Item>GALLERY</Item>
          <Item>TESTIMONIALS</Item>
          <Item>TEAM</Item>
          <Item>CONTACT</Item>
        </Menu>

        <Button>LAUNCH APP</Button>
      </ContentContainer>
    </NavigationContainer>
  );
};

export default Navigation;
