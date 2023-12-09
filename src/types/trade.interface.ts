export default interface ITrade {
  trade: {
    current_coin: string;
    coin_pairs: string[];
    amount: number;
  };
  signature: string;
}
