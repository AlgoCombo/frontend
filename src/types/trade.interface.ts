export default interface ITrade {
  trade: {
    current_coin: string;
    coin_pairs: string[];
    amount: number;
    algorithm: string;
    execution_type: string;
  };
  signature: string;
}
