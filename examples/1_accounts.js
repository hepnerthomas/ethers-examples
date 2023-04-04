const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ALCHEMY_API_KEY = '<INSERT ALCHEMY API  KEY HERE>'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`)

const address = '0x1a171a91B4Aa1A669e2397D6670746DDcDd4fbBe'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

