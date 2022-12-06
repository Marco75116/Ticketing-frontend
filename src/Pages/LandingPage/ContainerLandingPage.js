import React from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Team from "./Team/Team";
import DescriptionBlockchain from "./DescriptionBlockchain/DescriptionBlockchain";
import Contact from "./Contact/Contact";
import Service from "./Services/Service";

const ContainerLandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <DescriptionBlockchain />
      <Service />
      <Team />
      <Contact />
    </div>
  );
};

export default ContainerLandingPage;
