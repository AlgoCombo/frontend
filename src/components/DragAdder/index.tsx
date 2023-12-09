"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import AddTokenPair from "../Blocks/AddTokenPair";
import AddAlgorithm from "../Blocks/AddAlgorithm";

function DragAdder() {
  return (
    <>
      <div className="p-5 grid grid-cols-2 overflow-y-auto">
        {/* Left */}
        <div className="space-y-5">
          <AddTokenPair />
          <AddAlgorithm />
          <div className="text-primary-100/80 border border-primary-400/60 h-40 rounded-xl flex flex-col items-center justify-center space-y-3 cursor-pointer hover:bg-primary-300/10 transition">
            <PlusIcon className="w-6 h-6" />
            <h1>Add Execution Layer</h1>
          </div>
        </div>

        {/* Right */}
        <div></div>
      </div>
    </>
  );
}

export default DragAdder;
