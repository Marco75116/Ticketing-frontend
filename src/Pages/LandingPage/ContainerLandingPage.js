import React from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Team from "./Team/Team";
import DescriptionBlockchain from "./DescriptionBlockchain/DescriptionBlockchain";

const ContainerLandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <DescriptionBlockchain />
      <Team />
    </div>
  );
};

export default ContainerLandingPage;
