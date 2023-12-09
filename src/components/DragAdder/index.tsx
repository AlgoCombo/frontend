"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import AddTokenPair from "../Blocks/AddTokenPair";
import AddAlgorithm from "../Blocks/AddAlgorithm";
import AddExecutionLayer from "../Blocks/AddExecutionLayer";

function DragAdder() {
  const executeTrade = async () => {};

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
        </div>
        <div className="w-full">
          <button className="w-full h-10 bg-transparent rounded-xl border border-white">
            Execute Trade
          </button>
        </div>
      </div>
    </>
  );
}

export default DragAdder;
