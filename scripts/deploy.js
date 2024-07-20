// scripts/deploy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const OscarGrouchToken = await ethers.getContractFactory("OscarGrouchToken");
  const oscarGrouchToken = await upgrades.deployProxy(OscarGrouchToken, [deployer.address, 2, deployer.address], { initializer: 'initialize' });
  
  await oscarGrouchToken.deployed();

  console.log("OscarGrouchToken deployed to:", oscarGrouchToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
