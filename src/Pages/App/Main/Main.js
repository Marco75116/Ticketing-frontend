import React, { useContext } from "react";
import { WalletContext } from "../../../Context/Wallet.context";
import { MainContainer } from "./Main.styled";
import ConnectWalletCard from "./ConnectWalletCard/ConnectWalletCard";
import { Outlet } from "react-router-dom";

const Main = () => {
  const { isWalletConnected } = useContext(WalletContext);
  return (
    <MainContainer style={{ color: "black" }}>
      {!isWalletConnected && (
        <ConnectWalletCard
          title={"Start exploring games"}
          subtitle={"Connect your wallet to get access & purchase a ticket..."}
        />
      )}
      <Outlet />
    </MainContainer>
  );
};

export default Main;
