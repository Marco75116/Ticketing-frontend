import React from "react";
import {
  Wrapper,
  Title,
  Grid,
  Card,
  Logo,
  CardTitle,
  CardDescription,
  FontIcon,
  Icon1,
  Icon2,
  Icon3,
} from "./DescriptionBlockchain.styled";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const DescriptionBlockchain = () => {
  return (
    <Wrapper>
      <Title>Why should I manage ticketing with blockchain technology?</Title>
      <Grid>
        <Card>
          <Logo>
            <Icon1 size="60" />
          </Logo>
          <CardTitle>Security</CardTitle>
          <CardDescription>
            Our tickets are registered on the blockchain making fraud
            impossible.
          </CardDescription>
        </Card>

        <Card>
          <Logo>
            <Icon2 size="60" />
          </Logo>
          <CardTitle>Profitability</CardTitle>
          <CardDescription>
            Total control and insights over secondary market. Earn profits on
            ticket resales.
          </CardDescription>
        </Card>

        <Card>
          <Logo>
            <Icon3 size="60" />
          </Logo>
          <CardTitle>Fans</CardTitle>
          <CardDescription>
            Clear and verifiable data on ticket ownership to reward your true
            fans
          </CardDescription>
        </Card>
      </Grid>
    </Wrapper>
  );
};

export default DescriptionBlockchain;
