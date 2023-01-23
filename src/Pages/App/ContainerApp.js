import React from "react";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import { Wrapper } from "./ContainerApp.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContainerApp = () => {
  return (
    <Wrapper>
      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Main />
    </Wrapper>
  );
};

export default ContainerApp;
