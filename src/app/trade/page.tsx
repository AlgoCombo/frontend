import React from "react";
import "./index.css";
import TradingViewWidget from "@/components/TradingViewWIdget";
import DragAdder from "@/components/DragAdder";

export default function Trade() {
  return (
    <main className="trade">
      <div className="vertical-sections">
        <div className="tv-graph">
          <TradingViewWidget symbol="NASDAQ:AAPL" />
        </div>
        <div className="drag-drop">
          <DragAdder />
        </div>
      </div>
    </main>
  );
}
