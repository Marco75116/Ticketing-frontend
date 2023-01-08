import styled from "styled-components";
import { Matic } from "@styled-icons/crypto/Matic";

export const Wrapper = styled.div`
  display: inline-block;
`;
export const CardProfile = styled.div`
  background-color: #d3d4d7;
  display: inline-block;
  box-shadow: inset 0px 0px 2px gray;
  border-radius: 7px;
  width: 320px;
  filter: drop-shadow(0 0 8px #fff);
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
`;
export const Section = styled.div`
  padding: 0.75rem 1.5rem;
  box-shadow: ${(props) =>
    props.titleSecontion ? "0 4px 2px -2px gray" : "0 2px 2px -2px black"};
`;
export const TitlePart = styled.h4`
  margin: 0.7rem 0;
  text-transform: uppercase;
`;
export const BalanceContent = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  padding: 0rem 1.5rem;
`;
export const AmountContainer = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgb(255 255 255 / 50%) 0px 0px 4px inset;
  border-radius: 4px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
`;
export const IconMatic = styled(Matic)`
  color: rgba(123, 63, 228);
  margin-right: 1rem;
`;
export const Balance = styled.p`
  margin-right: 3.3rem;
  font-weight: 800;
  font-size: 1.5rem;
  color: black;
`;
export const AnalyticsContent = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  padding: 0rem 1.5rem;
`;
export const Analytic = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  width: 90%;
`;
export const NumberAnalitic = styled.span`
  color: black;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem 1.5rem;
`;
export const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.3rem 0;
  cursor: pointer;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  background: ${(props) => (props.priority ? "black" : "white")};
  border: ${(props) =>
    props.priority
      ? "0px solid rgba(224, 224, 224, 0.5)"
      : "1px solid rgba(224, 224, 224, 0.5)"};
  color: ${(props) =>
    props.priority ? "white" : props.theme.colors.headerBackground};
`;
