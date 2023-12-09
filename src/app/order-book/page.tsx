"use client";
import React, { use, useEffect, useState } from "react";
import "./index.css";
import IOrder from "@/types/order.interface";

export default function OrderBook() {
  const [orderBook, setOrderBook] = useState<IOrder[]>([]);

  useEffect(() => {
    handleFetchOrderBook();
  }, []);

  const handleFetchOrderBook = async () => {};

  return (
    <div className="order-book">
      <div className="order-book-list"></div>
    </div>
  );
}
