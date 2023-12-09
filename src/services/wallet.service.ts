import axios from "./index.service";

export async function getHotWalletForUser(data: any) {
  return await axios.post("/users/hot-wallet", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getWalletBalances(data: any) {
  const res = await fetch(
    `https://api.1inch.dev/balance/v1.2/${data.chainId}/balances/${data.address}`
  );
  return await res.json();
}

export async function getTokenAddresses() {}
