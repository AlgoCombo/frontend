"use client";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygon,
  goerli,
  polygonMumbai,
} from "wagmi/chains";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import ConnectWallet from "@/components/ConnectWallet";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./theme.provider";

const inter = Poppins({
  subsets: ["latin-ext"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chains = [goerli, polygonMumbai, arbitrum, mainnet, polygon];
  const projectId = "dd0d6065610301cf7f8d51557cbbffc3";
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
          {/* <ConnectWallet /> */}
          <Navbar />
          <Web3Modal
            projectId={projectId}
            ethereumClient={ethereumClient}
            themeVariables={{
              "--w3m-accent-color": "#252525",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
