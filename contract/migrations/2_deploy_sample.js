const OAToken20 = artifacts.require('OAToken20');
const OAToken721 = artifacts.require('OAToken721');
// const OAToken = artifacts.require('OAToken');

module.exports = function (deployer) {
	deployer.deploy(OAToken20);
	deployer.deploy(OAToken721);
	// deployer.deploy(OAToken);
};
