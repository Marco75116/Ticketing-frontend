import React from "react";
import {
  TeamContainer,
  ContentContainer,
  Title,
  Description,
  Grid,
  Profil,
  Img,
  Name,
  Position,
} from "./Team.styled";

const Team = () => {
  return (
    <TeamContainer>
      <ContentContainer>
        <Title>Upgrade your tickets with our team</Title>
        <Description>
          A team of graduate engineers at the Pôle Léonard de Vinci entirely
          focused on blockchain technology.
        </Description>
        <Grid>
          <Profil>
            <Img src="https://media-exp1.licdn.com/dms/image/C4E03AQFPBIcwKuCR4Q/profile-displayphoto-shrink_200_200/0/1633530056475?e=1675900800&v=beta&t=iUqgGOoT5jTa0lGLNtm5gRFwga4ZvabtOJlkPMg5M6A" />
            <Name>Nicolas Dumont</Name>
            <Position>Back-end Developer at Nomadiclabs</Position>
          </Profil>

          <Profil>
            <Img src="https://media-exp1.licdn.com/dms/image/C4D03AQH86DppmYzMiw/profile-displayphoto-shrink_200_200/0/1591119277384?e=1675900800&v=beta&t=3OJk7OODLxPjMiiygVIBsCH3VNKnX800FAfrOV-JnRw" />
            <Name>Quentin Flachaire</Name>
            <Position>Fullstack Developer at Société Général</Position>
          </Profil>

          <Profil>
            <Img src="https://media-exp1.licdn.com/dms/image/C4D03AQHeoG3U3xdZOg/profile-displayphoto-shrink_200_200/0/1617010680745?e=1675900800&v=beta&t=kztpPaW53oHe2bOQqp9jDffRozviMZM5MkJPHv6f4s8" />
            <Name>Nasreddine Grihma</Name>
            <Position>Analyst at IBM</Position>
          </Profil>

          <Profil>
            <Img src="https://ca.slack-edge.com/T9MJ7UEG7-U045VHC9KPE-02221ca309e2-512" />
            <Name>Marc-antoine Ourradour</Name>
            <Position>Web3 Front-end Developer at Pyratlabs</Position>
          </Profil>
        </Grid>
      </ContentContainer>
    </TeamContainer>
  );
};

export default Team;
