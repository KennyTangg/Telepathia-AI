import React from "react";
import { Config, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, darkTheme, defaultConfig } from "@xellar/kit";
import { liskSepolia } from "viem/chains";

const walletConnectProjectId = import.meta.env.VITE_XELLAR_PROJECT_ID;

export const config = defaultConfig({
  appName: "Telepathia-AI",
  walletConnectProjectId,
  xellarAppId: import.meta.env.VITE_XELLAR_APP_ID,
  xellarEnv: "sandbox",
  chains: [liskSepolia],
}) as Config;

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider theme={darkTheme}>{children}
        </XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
