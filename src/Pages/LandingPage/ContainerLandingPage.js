import React, { useRef } from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Team from "./Team/Team";
import DescriptionBlockchain from "./DescriptionBlockchain/DescriptionBlockchain";
import Contact from "./Contact/Contact";
import Service from "./Services/Service";
import About from "./About/About";

const ContainerLandingPage = () => {
  const contactRef = useRef(null);
  const powerfullRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const headerRef = useRef(null);

  const scroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 78);
  };
  const contactScroll = () => scroll(contactRef);
  const powerfullScroll = () => scroll(powerfullRef);
  const aboutScroll = () => scroll(aboutRef);
  const servicesScroll = () => scroll(servicesRef);
  const teamScroll = () => scroll(teamRef);
  const headerScroll = () => scroll(headerRef);

  return (
    <div>
      <Navigation
        header={headerScroll}
        contact={contactScroll}
        powerfull={powerfullScroll}
        about={aboutScroll}
        services={servicesScroll}
        team={teamScroll}
      />
      <Header refProp={headerRef} />
      <DescriptionBlockchain refProp={powerfullRef} />
      <About refProp={aboutRef} />
      <Service refProp={servicesRef} />
      <Team refProp={teamRef} />
      <Contact refProp={contactRef} />
    </div>
  );
};

export default ContainerLandingPage;
