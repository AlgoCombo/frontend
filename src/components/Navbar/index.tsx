import React from "react";
import "./index.css";
import ConnectWallet from "../ConnectWallet";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();

  React.useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <div className="navbar">
      <h1>AlgoCombo</h1>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/trade">Trade</a>
        <a href="/order-book">Order book</a>
        <a href="/order-book">Vault</a>
      </div>
      <ConnectWallet />
      {/* <ThemeSwitcher /> */}
    </div>
  );
}
