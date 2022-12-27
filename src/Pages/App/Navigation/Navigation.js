import React, { useContext } from "react";
import { WalletContext } from "../../../Context/Wallet.context";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationContainer,
  ContentContainer,
  Brand,
  Item,
  Menu,
  Button,
  IconWallet,
  IconPower,
  IconUser,
  IconProfilContainer,
} from "./Navigation.styled";

const Navigation = () => {
  const {
    isWalletConnected,
    currentWalletAddress,
    getConnectedWallet,
    disconnectWallet,
  } = useContext(WalletContext);

  const navigate = useNavigate();

  const hiddenAdress =
    currentWalletAddress.slice(0, 6) + "..." + currentWalletAddress.slice(-6);

  return (
    <div>
      <NavigationContainer>
        <ContentContainer isWalletConnected={isWalletConnected}>
          <Brand>Sporty</Brand>
          <Menu>
            <Item>Games</Item>
            <Item>Club</Item>
          </Menu>

          <Button
            onClick={() => {
              !isWalletConnected && getConnectedWallet();
            }}
            isWalletConnected={isWalletConnected}
          >
            {isWalletConnected ? (
              <>
                <IconWallet size="20" /> {hiddenAdress}
                <IconPower
                  id="props-basic"
                  onClick={() => {
                    disconnectWallet();
                    navigate("/app");
                  }}
                  size="23"
                />
                <Tooltip anchorId="props-basic" content="Disconnect" />
              </>
            ) : (
              "Connect Wallet"
            )}
          </Button>
        </ContentContainer>
        {isWalletConnected && (
          <IconProfilContainer>
            <Link to={"/app/profile"}>
              <IconUser size="25" />
            </Link>
          </IconProfilContainer>
        )}
      </NavigationContainer>
    </div>
  );
};

export default Navigation;
