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
  Icon3,
  Icon4,
} from "./Service.styled";

const Service = () => {
  return (
    <Wrapper>
      <ContainerContent>
        <Title>Our Services</Title>
        <Description>
          We provide you an user friendly app to deal with our services
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
            <Logo></Logo>
            <CardTitle>Validate</CardTitle>
            <CardDescription></CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon3 size="60" />
            </Logo>
            <CardTitle>Control</CardTitle>
            <CardDescription>
              Control ticket ownership of the guests thanks to the scanner on
              our application.
            </CardDescription>
          </Card>

          <Card>
            <Logo>
              <Icon4 size="60" />
            </Logo>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>
              Optimise your sales strategy with relevant informations displayed
              on your personal dashboard.{" "}
            </CardDescription>
          </Card>

          <Card>
            <Logo></Logo>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </Card>

          <Card>
            <Logo></Logo>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </Card>
        </Grid>
      </ContainerContent>
    </Wrapper>
  );
};

export default Service;
