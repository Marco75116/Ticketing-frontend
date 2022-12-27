import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

export const WalletContext = createContext({});

const WalletProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");
  const [balance, setBalance] = useState(0);

  const connect = (address) => {
    setCurrentWalletAddress(address);
    setIsWalletConnected(true);
  };

  const initConnection = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts && accounts.length > 0) {
      connect(accounts[0]);
      provider
        .getBalance(accounts[0])
        .then((balance) => setBalance(ethers.utils.formatEther(balance)));
    }
  };
  const getConnectedWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    signer.getAddress().then((address) => {
      connect(address);
      provider
        .getBalance(address)
        .then((balance) => setBalance(ethers.utils.formatEther(balance)));
    });
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setCurrentWalletAddress("");
  };

  useEffect(() => {
    initConnection();
  }, []);

  window.ethereum.on("accountsChanged", async () => {
    getConnectedWallet();
  });

  return (
    <WalletContext.Provider
      value={{
        isWalletConnected,
        currentWalletAddress,
        balance,
        getConnectedWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
