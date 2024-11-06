require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    bscTestnet: {
      url: process.env.BSC_TESTNET,          // URL của BSC testnet từ .env
      accounts: [process.env.OWNER_PRIV_KEY] // Khóa riêng tư từ .env
    },
  },
};
