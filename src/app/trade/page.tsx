import React from "react";
import "./index.css";
import TradingViewWidget from "@/components/TradingViewWIdget";

export default function Trade() {
  return (
    <main className="trade">
      <div className="vertical-sections">
        <div className="tv-graph">
          <TradingViewWidget symbol="NASDAQ:AAPL" />
        </div>
        <div className="drag-drop">
          <h1>Here comes the drag and drop tool.</h1>
        </div>
      </div>
    </main>
  );
}
