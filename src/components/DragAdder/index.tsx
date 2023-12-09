"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import AddTokenPair from "../Blocks/AddTokenPair";
import AddAlgorithm from "../Blocks/AddAlgorithm";
import AddExecutionLayer from "../Blocks/AddExecutionLayer";
import { useRef, useState } from "react";
import { getAccount, walletClient } from "@/configs/wallet_config";
import { useTradeStore } from "@/states/trade.state";
import ITrade from "@/types/trade.interface";
import { createTrade } from "@/services/trade.service";
import { useChainId } from "wagmi";

function DragAdder() {
  const amountRef = useRef<HTMLInputElement>(null);
  const currentToken = useTradeStore((s: any) => s.currentToken);
  const tokenList = useTradeStore((s: any) => s.tokenList);
  const executionLayer = useTradeStore((s: any) => s.executionLayer);
  const algorithm = useTradeStore((s: any) => s.algorithm);
  const [signature, setSignature] = useState<string>("");

  const chainId = useChainId();

  const handleSendSignature = async () => {
    const account = await getAccount();
    console.log(account, "ACCOUNT");

    if (!account) return;

    console.log(chainId, "CHAIN ID");

    const signature = await walletClient.signMessage({
      account,
      message: "new trade request",
    });
    setSignature(signature);
    executeTrade(signature);
    console.log(signature, "SIGNATURE");
  };

  const executeTrade = async (sign: string) => {
    if (!amountRef.current?.value) return;
    console.log("in execute trade");
    const trade: ITrade = {
      trade: {
        current_coin: currentToken,
        coin_pairs: tokenList,
        amount: parseInt(amountRef.current?.value!),
        algorithm: JSON.stringify({
          name: algorithm,
        }),
        execution_type: executionLayer.name,
        chain_id: chainId,
      },
      signature: sign,
    };

    console.log(trade, "TRADE");
    const res = await createTrade(trade);
    console.log(res, "RES");
  };

  return (
    <>
      <div
        className="p-5"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Left */}
        <div className="space-y-5 w-full">
          <AddTokenPair />
          <AddAlgorithm />
          <AddExecutionLayer />
          <input
            type="text"
            placeholder={`Enter Amount (in USDT)`}
            className="input input-bordered w-full"
            prefix="$"
            ref={amountRef}
          />
        </div>
        <div className="w-full">
          <button
            className="w-full h-10 bg-transparent rounded-xl border border-white"
            onClick={handleSendSignature}
          >
            Execute Trade
          </button>
        </div>
      </div>
    </>
  );
}

export default DragAdder;
