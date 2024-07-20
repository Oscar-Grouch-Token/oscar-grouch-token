const OscarGrouchToken = artifacts.require("OscarGrouchToken");

module.exports = function (deployer) {
  deployer.deploy(OscarGrouchToken);
};

