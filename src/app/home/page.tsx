"use client";
import React from "react";
import "./index.css";
import { Web3Button, Web3Modal } from "@web3modal/react";
import ConnectWallet from "@/components/ConnectWallet";
import { useTheme } from "next-themes";

export default function Home() {
  // const { theme } = useTheme();

  // React.useEffect(() => {
  //   if (theme === "dark") {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // }, [theme]);

  return (
    <div className="home">
      <h1>ALGOCOMBO</h1>
      <h2>Automate Money Making</h2>
      <button className="start-btn" onClick={() => {}}>
        Start Trading
      </button>
    </div>
  );
}
