import React from "react";
import { ThemeProvider } from "styled-components";
import { main } from "../Theme.styled";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletProvider from "../Context/Wallet.context";
import HomeProvider from "../Context/Home.context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/marco75116/polygon",
  cache: new InMemoryCache(),
});

const Providers = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <WalletProvider>
          <HomeProvider>
            <ThemeProvider theme={main}>{children}</ThemeProvider>
          </HomeProvider>
        </WalletProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default Providers;
