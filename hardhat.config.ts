import "dotenv/config"
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"
import "./scripts/index"

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.20" }, { version: "0.4.18" }] },
  gasReporter: {
    currency: "USD",
    gasPrice: 21,
    enabled: true,
  },
  networks: {
    b3: {
      url: `https://b3-testnet.rpc.caldera.xyz/http`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      b3test: process.env.B3_API_KEY ?? "",
      b3main: process.env.B3_API_KEY ?? "",
    },
    customChains: [
      {
        network: "b3test",
        chainId: 1993,
        urls: {
          apiURL: "https://eth-sepolia.blockscout.com/api",
          browserURL: "https://sepolia.explorer.b3.fun/",
        },
      },
      {
        network: "b3main",
        chainId: 84532,
        urls: {
          apiURL: "https://eth.blockscout.com/api",
          browserURL: "https://sepolia.basescan.org/",
        },
      },
    ],
  },
}

export default config
