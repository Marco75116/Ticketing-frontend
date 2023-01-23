import React, { useContext } from "react";
import { WalletContext } from "../../../../Context/Wallet.context";
import {
  Wrapper,
  CardProfile,
  Title,
  Section,
  TitlePart,
  BalanceContent,
  AmountContainer,
  IconMatic,
  Balance,
  AnalyticsContent,
  Analytic,
  ButtonsWrapper,
  Button,
  NumberAnalitic,
  IconGame,
} from "./ProfilePersonalCard.styled";

const ProfilePersonalCard = () => {
  const { balance, balanceGame } = useContext(WalletContext);
  return (
    <Wrapper>
      <CardProfile>
        <Section bowShadow={"0 4px 2px -2px gray"}>
          <Title>profil</Title>
        </Section>
        <Section>
          <TitlePart>your balances</TitlePart>
          <BalanceContent>
            <AmountContainer>
              <Balance>{parseFloat(balance).toFixed(3)}</Balance>
              <IconMatic size="30" />
            </AmountContainer>
            <AmountContainer>
              <Balance>{parseFloat(balanceGame).toFixed(3)}</Balance>
              <IconGame size="30" />
            </AmountContainer>
          </BalanceContent>
        </Section>
        <Section>
          <TitlePart>analytics</TitlePart>
          <AnalyticsContent>
            <Analytic>
              <span>Games purchased :</span> <NumberAnalitic> 6</NumberAnalitic>
            </Analytic>
            <Analytic>
              <span>Games resold : </span>
              <NumberAnalitic>2</NumberAnalitic>
            </Analytic>
            <Analytic>
              <span>Games seen :</span> <NumberAnalitic>4</NumberAnalitic>
            </Analytic>
          </AnalyticsContent>
        </Section>
        <Section bowShadow={"0 0px 0px 0px gray"}>
          <TitlePart>add funds</TitlePart>
          <ButtonsWrapper>
            <Button>Credit card</Button>
            <Button priority={1}>Crypto</Button>
          </ButtonsWrapper>
        </Section>
      </CardProfile>
    </Wrapper>
  );
};

export default ProfilePersonalCard;
