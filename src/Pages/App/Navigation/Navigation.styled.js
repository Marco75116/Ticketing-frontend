import styled from "styled-components";
import { Wallet2 } from "@styled-icons/bootstrap/Wallet2";
import { Power } from "@styled-icons/bootstrap/Power";
import { User } from "@styled-icons/boxicons-regular/User";

export const NavigationContainer = styled.div`
  border-color: rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  color: #fff;
  background-color: #5ca9fb;
  background-image: linear-gradient(
    to right,
    #5ca9fb 0%,
    #6372ff 25%,
    #6372ff 50%,
    #6372ff 75%,
    #5ca9fb 100%
  );
  display: flex;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) =>
    props.isWalletConnected ? "15px 0px 15px 15px" : "15px"};
  width: ${(props) => (props.isWalletConnected ? "96%" : "100%")};
`;
export const IconProfilContainer = styled.div`
  width: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Brand = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  margin: 9px 20px 0;
  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Item = styled.div`
  font-size: 15px;
  margin: 9px 20px 0;
  cursor: pointer;
  color: #fff;
  padding: 8px 2px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  transition: 0.1s;

  border-bottom: ${(props) =>
    props.selectedPart ? "3px solid transparent" : ""};
  border-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  border-image-slice: 1;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: #fff;
  height: 35px;
  color: #6372ff;
  border-radius: 6px;
  border: 2px solid #6372ff;
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
  font-family: "Raleway", sans-serif;
  cursor: ${(props) => (props.isWalletConnected ? "default" : "pointer")};
`;

export const IconWallet = styled(Wallet2)`
  color: #6372ff;
`;

export const IconPower = styled(Power)`
  color: #6372ff;
  cursor: pointer;
`;

export const IconUser = styled(User)`
  color: #fff;
  cursor: pointer;
`;
