import React, { useState } from "react";
import {
  NavigationContainer,
  ContentContainer,
  Brand,
  Item,
  Menu,
  Button,
} from "./Navigation.styled";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [selectedPart, setSelectedPart] = useState(0);

  return (
    <NavigationContainer>
      <ContentContainer>
        <Brand
          onClick={() => {
            props.header();
            setSelectedPart(0);
          }}
        >
          Sporty
        </Brand>
        <Menu>
          <Item
            selectedPart={selectedPart === 1}
            onClick={() => {
              props.powerfull();
              setSelectedPart(1);
            }}
          >
            POWERFULL
          </Item>
          <Item
            selectedPart={selectedPart === 2}
            onClick={() => {
              props.about();
              setSelectedPart(2);
            }}
          >
            ABOUT
          </Item>
          <Item
            selectedPart={selectedPart === 3}
            onClick={() => {
              props.services();
              setSelectedPart(3);
            }}
          >
            SERVICES
          </Item>
          <Item
            selectedPart={selectedPart === 4}
            onClick={() => {
              props.team();
              setSelectedPart(4);
            }}
          >
            TEAM
          </Item>
          <Item
            selectedPart={selectedPart === 5}
            onClick={() => {
              props.contact();
              setSelectedPart(5);
            }}
          >
            CONTACT
          </Item>
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
