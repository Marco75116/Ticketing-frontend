import React from "react";
import { ThemeProvider } from "styled-components";
import { main } from "../Theme.styled";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletProvider from "../Context/Wallet.context";
import HomeProvider from "../Context/Home.context";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <HomeProvider>
          <ThemeProvider theme={main}>{children}</ThemeProvider>
        </HomeProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
};

export default Providers;
