const fs = require("fs");
const Web3 = require("web3");
const input = fs.readFileSync('build/contracts/UnitFundToken.json');
const obj = JSON.parse(input);
const abi = obj.abi;
const bytecode = obj["unlinked_binary"];

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const contract = web3.eth.contract(abi);

// Get contract data
const contractData = contract.new.getData(1501056000, 1503734400, web3.toWei(4878, "ether"), {data: bytecode});

console.log("CONTRACT DATA\n", contractData);