import { createWalletClient, custom } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

export const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});

export async function getAccount() {
  const [account] = await walletClient.getAddresses();
  return account;
}
