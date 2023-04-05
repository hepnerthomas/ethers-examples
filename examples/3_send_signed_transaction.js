const { ethers } = require("ethers");
require('dotenv').config()

// const ALCHEMY_API_KEY = process.env.ALCHEMY_GOERLI_API_KEY;
const { ALCHEMY_GOERLI_URL, ALCHEMY_GOERLI_API_KEY } = process.env;
const provider = new ethers.providers.JsonRpcProvider(`${ALCHEMY_GOERLI_URL}${ALCHEMY_GOERLI_API_KEY}`)

const account1 = '0x9FCD8Df15D1B78D8e643Fb006D039f931794Be91' // Your account address 1
const account2 = '0x7f110Ba43Cd7EEd0837658a467A211E9177b0629' // Your account address 2

const privateKey1 = process.env.PRIVATE_KEY_1;
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()