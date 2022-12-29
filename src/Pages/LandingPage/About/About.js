import React, { useState } from "react";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  Wrapper,
  ContainerContent,
  AboutContent,
  IconMatic,
  TextAbout,
  Title,
  Stats,
  ContainerIcon,
  StatsText,
  TextBellow,
  StatNumber,
} from "./About.styled";

const About = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Wrapper ref={props.refProp}>
      <ContainerContent>
        <Title>Polygon</Title>
        <AboutContent clicked={clicked}>
          <ContainerIcon
            clicked={clicked}
            onClick={() => setClicked((prev) => !prev)}
          >
            <IconMatic id="props-basic" size="190" />
            <Tooltip
              anchorId="props-basic"
              content={!clicked && "View statistics"}
            />
          </ContainerIcon>

          <TextAbout clicked={clicked}>
            <p>
              We have chosen Polygon blockchain for the scalability that it
              provides. The performance of blockchain is perfectly suited to the
              needs of the largest sporting events.
            </p>

            <p>Polygon is very popular and accessible.</p>
          </TextAbout>

          {clicked && (
            <Stats clicked={clicked}>
              <StatsText>
                <StatNumber>7000</StatNumber>
                <TextBellow>Transactions per sec</TextBellow>
              </StatsText>
              <StatsText>
                <StatNumber>~$0.002</StatNumber>
                <TextBellow>Cost per transaction</TextBellow>
              </StatsText>
            </Stats>
          )}
        </AboutContent>
      </ContainerContent>
    </Wrapper>
  );
};

export default About;
