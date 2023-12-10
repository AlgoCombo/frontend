"use client";
import { createWalletClient, custom, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

export const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
});

export async function getAccount() {
  const [account] = await walletClient.getAddresses();
  return account;
}
