import React from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Team from "./Team/Team";
import DescriptionBlockchain from "./DescriptionBlockchain/DescriptionBlockchain";
import Contact from "./Contact/Contact";

const ContainerLandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <DescriptionBlockchain />
      <Team />
      <Contact />
    </div>
  );
};

export default ContainerLandingPage;
