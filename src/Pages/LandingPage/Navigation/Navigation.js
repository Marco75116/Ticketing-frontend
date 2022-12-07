import React from "react";
import {
  NavigationContainer,
  ContentContainer,
  Brand,
  Item,
  Menu,
  Button,
} from "./Navigation.styled";
import { Link, Outlet } from "react-router-dom";

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <ContentContainer>
        <Brand onClick={() => props.header()}>Sporty</Brand>
        <Menu>
          <Item onClick={() => props.powerfull()}>POWERFULL</Item>
          <Item onClick={() => props.about()}>ABOUT</Item>
          <Item onClick={() => props.services()}>SERVICES</Item>
          <Item onClick={() => props.team()}>TEAM</Item>
          <Item onClick={() => props.contact()}>CONTACT</Item>
        </Menu>

        <Button>
          <Link
            style={{
              position: "absolute",
              opacity: 0,
            }}
            to="/app"
          >
            LAUNCH APP
          </Link>
          LAUNCH APP
        </Button>
      </ContentContainer>
    </NavigationContainer>
  );
};

export default Navigation;
