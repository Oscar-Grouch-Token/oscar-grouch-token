require('dotenv').config();

const {broken shallow shock kit stereo peasant hill put radar novel below fault,eab7e6b854a542f78e214b89e8c13781 } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
