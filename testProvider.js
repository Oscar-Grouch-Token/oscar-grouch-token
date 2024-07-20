const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "eab7e6b854a542f78e214b89e8c13781"; // Your Infura project ID
const mnemonic = "broken shallow shock kit stereo peasant hill put radar novel below fault";  // Your MetaMask mnemonic

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111,       // Sepolia's id
      gas: 5500000,        // Gas limit used for deploys
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};