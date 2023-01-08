import React from "react";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import { Wrapper } from "./ContainerApp.styled";

const ContainerApp = () => {
  return (
    <Wrapper>
      <Navigation />
      <Main />
    </Wrapper>
  );
};

export default ContainerApp;
