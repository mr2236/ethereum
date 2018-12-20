var Coin = artifacts.require("Coin");

module.exports = function(deployer) {

    initialSupply = 21000000;
    tokenName = "Samyr coin";
    tokenSymbol = "SAM";

  deployer.deploy(Coin, initialSupply, tokenName, tokenSymbol);
};
