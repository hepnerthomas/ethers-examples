const { ethers } = require("ethers");
require('dotenv').config()

const { ALCHEMY_MAINNET_URL, ALCHEMY_MAINNET_API_KEY, PRIVATE_KEY_1 } = process.env;
const provider = new ethers.providers.JsonRpcProvider(`${ALCHEMY_MAINNET_URL}${ALCHEMY_MAINNET_API_KEY}`);

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(`\nBlock Info:\n`)
    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()