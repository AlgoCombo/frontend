import axios from "./index.service";

export async function getHotWalletForUser(data: any) {
  return await axios.post("/users/hot-wallet", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
