const { readFileSync } = require("fs");
const Web3 = require("web3");
const path = require("path");
require("dotenv").config();

// Sử dụng BSC Testnet endpoint
const url = process.env.BSC_TESTNET || "";
const addrToken = process.env.TOKEN_ADDR || "";
const web3 = new Web3(url);

// Đọc ABI từ tệp JSON của token
const abi = JSON.parse(
  readFileSync(path.resolve(__dirname, "./abi/Token.json"), "utf-8")
).abi;

const token = new web3.eth.Contract(abi, addrToken);

async function addAccountToWallet() {
  const account = web3.eth.accounts.privateKeyToAccount(
    process.env.OWNER_PRIV_KEY || ""
  );
  await web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;
  return account;
}

async function getBalance(_addr) {
  const wei = await token.methods.balanceOf(_addr).call();
  return wei;
}

async function sendToken(_addr) {
  const account = await addAccountToWallet();
  try {
    const gas = await token.methods
      .transfer(_addr, 100)
      .estimateGas({ from: account.address });

    const tx = await token.methods
      .transfer(_addr, 100)
      .send({
        from: account.address,
        gas: gas,
      });
    
    console.log("Transaction successful:", tx);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

const main = async () => {
  const balance = await getBalance("0xcca8b5bA7b33b5F589ec58908352057709d7046a");
  console.log("Balance before sending token:", balance.toString());
  await sendToken("0x9AA314dbec2aBd6CBaeA5d007f0DA7d9880cce13");
};

main();
