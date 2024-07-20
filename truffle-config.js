const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "eab7e6b854a542f78e214b89e8c13781"; // Replace with your Infura project ID
const mnemonic = "broken shallow shock kit stereo peasant hill put radar novel below fault";  // Replace with your MetaMask mnemonic

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20", // Ensure this matches your contract's Solidity version
    },
  },
};
