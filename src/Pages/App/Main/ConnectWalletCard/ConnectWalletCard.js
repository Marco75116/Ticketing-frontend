import React, { useContext } from "react";

import { WalletContext } from "../../../../Context/Wallet.context";
import {
  Card,
  Title,
  ConnectCard,
  ConnectWalletLabel,
  Button,
} from "./ConnectWalletCard.styled";

const ConnectWalletCard = ({ title, subtitle }) => {
  const { getConnectedWallet } = useContext(WalletContext);
  return (
    <Card>
      <ConnectCard>
        <Title>{title}</Title>
        <ConnectWalletLabel>{subtitle}</ConnectWalletLabel>
        <Button onClick={() => getConnectedWallet()}>Connect Wallet</Button>
      </ConnectCard>
    </Card>
  );
};

export default ConnectWalletCard;
