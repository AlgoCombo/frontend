import { create } from "zustand";

export const useTradeStore = create((set) => ({
  currentToken: null,
  setCurrentToken: (token: any) => set({ currentToken: token }),
  tokens: [],
  setTokens: (tokens: any) => set({ tokens: tokens }),
  amount: 0,
  setAmount: (amount: number) => set({ amount: amount }),
}));
