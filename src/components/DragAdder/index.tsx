"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import AddTokenPair from "../Blocks/AddTokenPair";
import AddAlgorithm from "../Blocks/AddAlgorithm";
import AddExecutionLayer from "../Blocks/AddExecutionLayer";

function DragAdder() {
  return (
    <>
      <div className="p-5 grid grid-cols-2 overflow-y-auto">
        {/* Left */}
        <div className="space-y-5">
          <AddTokenPair />
          <AddAlgorithm />
          <AddExecutionLayer />
        </div>

        {/* Right */}
        <div></div>
      </div>
    </>
  );
}

export default DragAdder;
