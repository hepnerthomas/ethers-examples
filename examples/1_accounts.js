const { ethers } = require("ethers");
require('dotenv').config()

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`)

const address = '0x1a171a91B4Aa1A669e2397D6670746DDcDd4fbBe'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

