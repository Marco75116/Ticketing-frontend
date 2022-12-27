import React, { useContext } from "react";
import { WalletContext } from "../../../Context/Wallet.context";

const Profile = () => {
  const { balance } = useContext(WalletContext);

  return <div>profile {balance}</div>;
};

export default Profile;
