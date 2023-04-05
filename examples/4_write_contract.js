const { ethers } = require("ethers");
require('dotenv').config();

const { ALCHEMY_GOERLI_URL, ALCHEMY_GOERLI_API_KEY, PRIVATE_KEY_1 } = process.env;
const provider = new ethers.providers.JsonRpcProvider(`${ALCHEMY_GOERLI_URL}${ALCHEMY_GOERLI_API_KEY}`);

const account1 = '0x9FCD8Df15D1B78D8e643Fb006D039f931794Be91'; // Your account address 1
const account2 = '0x7f110Ba43Cd7EEd0837658a467A211E9177b0629'; // Your account address 2

const wallet = new ethers.Wallet(PRIVATE_KEY_1, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

// test LINK address
const address = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB';
const contract  = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {

    const balance = await contract.balanceOf(account1);

    console.log(`\nReading from ${address}\n`)
    console.log(`\nSender balance before: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet.transfer(account2, balance);
    await tx.wait();

    console.log(tx);

    const balanceOfSender = await contract.balanceOf(account1);
    const balanceOfReceiver = await contract.balanceOf(account2);

    console.log(`\nSender balance after: ${balanceOfSender}\n`)
    console.log(`\Receiver balance after: ${balanceOfReceiver}\n`)
}

main()