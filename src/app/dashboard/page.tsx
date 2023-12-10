"use client";

import ConnectWallet from "@/components/ConnectWallet";
import { useTheme } from "next-themes";
import { useRef } from "react";

import "./index.css";

function Dashboard() {
  const { theme } = useTheme();
  const modal2 = useRef<any>(null);

  return (
    <>
      <div className="navbar bg-primary-100 flex items-center justify-between">
        <a className="btn btn-ghost text-xl font-bold">AlgoCombo</a>

        <div>
          <a href="#" onClick={() => modal2.current!.showModal()}>
            Vault
          </a>
        </div>

        <div>
          <ConnectWallet />
        </div>
      </div>
      <div className=" bg-primary-100 py-40 px-16">
        <div className="text-center">
          <h1 className="text-7xl font-black">AlgoCombo</h1>
          <p className="mt-10 text-xl">Automate Money Making</p>
        </div>
      </div>

      <dialog ref={modal2} id="my_modal_2" className="modal theme-options">
        <div
          className={`modal-box`}
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
    </>
  );
}

export default Dashboard;
