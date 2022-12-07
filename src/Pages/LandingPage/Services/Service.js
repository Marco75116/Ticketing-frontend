import React from "react";
import {
  Wrapper,
  ContainerContent,
  Title,
  Description,
  Grid,
  Card,
  Logo,
  CardTitle,
  CardDescription,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
} from "./Service.styled";

const Service = (props) => {
  return (
    <Wrapper ref={props.refProp}>
      <ContainerContent>
        <Title>Our Services</Title>
        <Description>
          We provide you an user friendly app to deal with our services.
        </Description>
        <Grid>
          <Card>
            <Logo>
              <Icon1 size="60" />
            </Logo>
            <CardTitle>Create</CardTitle>
            <CardDescription>
              Create easily your own football ticketing system fitted to your
              needs.
            </CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon2 size=" 60" />
            </Logo>
            <CardTitle>Validate</CardTitle>
            <CardDescription>
              Check ticket ownership of the guests thanks to the scanner on our
              application.
            </CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon3 size="60" />
            </Logo>
            <CardTitle>Control</CardTitle>
            <CardDescription>
              Total control and insights over secondary market.
            </CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon4 size="60" />
            </Logo>
            <CardTitle>Meaningfull Dashboard</CardTitle>
            <CardDescription>
              Optimise your sales strategy with relevant informations displayed
              on your personal dashboard.
            </CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon5 size="60" />
            </Logo>
            <CardTitle>Memories Studio</CardTitle>
            <CardDescription>
              A dedicated space to watch the best footage of the games your
              users attended.
            </CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon6 size="60" />
            </Logo>
            <CardTitle>Cryptocurrencies payement</CardTitle>
            <CardDescription>
              Accept the cryptos you want and boost your sales.
            </CardDescription>
          </Card>
        </Grid>
      </ContainerContent>
    </Wrapper>
  );
};

export default Service;
