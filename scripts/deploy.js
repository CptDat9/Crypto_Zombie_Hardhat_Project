const { ethers } = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory("Token"); // Lấy contract factory của Token
  const token = await Token.deploy(); // Triển khai contract

  // Sử dụng waitForDeployment() để chờ triển khai hoàn tất
  await token.waitForDeployment();

  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
