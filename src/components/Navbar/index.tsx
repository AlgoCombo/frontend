import React, { useRef } from "react";
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

  const modal2 = useRef<any>(null);

  return (
    <div className="navbar">
      <h1>AlgoCombo</h1>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/trade">Trade</a>
        <a href="/order-book">Order book</a>
        <a href="#" onClick={() => modal2.current!.showModal()}>
          Vault
        </a>
      </div>
      <ConnectWallet />
      <dialog ref={modal2} id="my_modal_2" className="modal theme-options">
        <div
          className={`modal-box ${theme === "dark" ? "bg-white" : "bg-black"}`}
        >
          <div className="mt-4 rounded-xl p-2 overflow-y-auto">
            <div className="vault-card-ui">
              <div className="vault-balance">
                <div className="balance-label">Balance:</div>
                <div className="balance-amount">$100.00</div>
              </div>
              <div className="vault-address">
                <div className="address">0x123...456</div>
                <div className="brand">at AlgoCombo</div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
