import React from "react";
import "./index.css";
import ConnectWallet from "../ConnectWallet";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>AlgoCombo</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/trade">Trade</a>
      </div>
      <ConnectWallet />
    </div>
  );
}
