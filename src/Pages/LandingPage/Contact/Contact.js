import React from "react";
import {
  Wrapper,
  ContainerContent,
  Title,
  Description,
  Grid,
  Item1,
  Item2,
  ContainerForm,
  TextInput,
  ButtonSend,
  TitleInfo,
  SectionInfo,
  Icon1,
  Icon2,
  ContainerInputInfos,
  Icon3,
  Span,
} from "./Contact.styled";

const Contact = (props) => {
  return (
    <Wrapper ref={props.refProp}>
      <ContainerContent>
        <Grid>
          <Item1>
            <Title>GET IN TOUCH</Title>
            <Description>
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </Description>
            <ContainerForm>
              <ContainerInputInfos>
                <TextInput placeholder="Name"></TextInput>
                <TextInput placeholder="Email"></TextInput>
              </ContainerInputInfos>
              <TextInput height={"7rem"} placeholder="Message"></TextInput>
              <ButtonSend>Send Message</ButtonSend>
            </ContainerForm>
          </Item1>

          <Item2>
            <TitleInfo>Contact Info</TitleInfo>
            <SectionInfo>
              <Span>
                <Icon1 size="25" /> Adresse
              </Span>
              <p>12 Av. Léonard de Vinci, 92400 Courbevoie</p>
            </SectionInfo>
            <SectionInfo>
              <Span>
                <Icon2 size="20" /> Phone
              </Span>
              <p>05 56 87 76 54</p>
            </SectionInfo>

            <SectionInfo>
              <Span>
                <Icon3 size="20" /> Email
              </Span>
              <p>Pastoutatis@gmail.com</p>
            </SectionInfo>
          </Item2>
        </Grid>
      </ContainerContent>
    </Wrapper>
  );
};

export default Contact;
