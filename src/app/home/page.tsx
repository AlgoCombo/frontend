"use client";
import React from "react";
import "./index.css";
import { Web3Button, Web3Modal } from "@web3modal/react";
import ConnectWallet from "@/components/ConnectWallet";

export default function Home() {
  return (
    <div className="home">
      <h1>ALGOCOMBO</h1>
      <h2>Automate Money Making</h2>
      <button className="btn btn-outline" onClick={() => {}}>
        Start Trading
      </button>
    </div>
  );
}
