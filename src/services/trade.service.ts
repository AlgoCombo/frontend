import axios from "./index.service";

export async function createTrade(data: any) {
  return await axios.post("/trades", data);
}
