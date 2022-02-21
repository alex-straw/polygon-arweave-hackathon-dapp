# DApp 

Building a simple website that:
  - Connects to a user's MetaMask
  - Shows user balance
  - Allows for payments to an address using Infura API & Ethers library

Chainlink VRF2 contract on Rinkeby:
  - 0xC344dc0a2E6443e9941d9e0C3F8d675d93a88CA8
  -  https://vrf.chain.link/rinkeby/495

  - requestRandomWords --> contract function to request VRF
  - s_requestId --> random var stored here
  - Only 0xF1C37BC188643DF4Bf15Fd437096Eb654d30abc1 can call this
  - Contract loaded with ~ 5 Link
