module.exports = {
  // Other configurations...

  networks: {
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001, // Matic Mumbai testnet
      gas: 8000000,
      gasPrice: 1000000000, // 1 gwei
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
};
