# Crypto Zombie Hardhat Project

<p align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&center=true&vCenter=true&random=false&width=450&lines=Crypto+Zombie" alt="Typing SVG" /></a>
</p>
<div align="center">
<img alt="Static Badge" src="https://img.shields.io/badge/Astar-group-blue?labelColor=EE4E4E&color=151515">
<img alt="Static Badge" src="https://img.shields.io/badge/Security-Research-blue?labelColor=e7ec89&color=3ddd2b&label=Security">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/CptDat9/Crypto_Zombie_Hardhat_Project?labelColor=7AA2E3&color=97E7E1">
</div>

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
## Hướng dẫn tạo Hardhat Project - Crypto Zombie Hardhat Project

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt project](#cài-đặt-project)
- [Các lệnh cơ bản](#các-lệnh-cơ-bản)
- [Thông tin bổ sung](#thông-tin-bổ-sung)
- [Minh họa](#minh-họa)
## Giới thiệu

Project này là một ví dụ cơ bản về việc sử dụng Hardhat, bao gồm:
- Các hợp đồng trong foler `Contracts`.
- Test cho hợp dồng.
- Một mô-đun `Ignition` của Hardhat để triển khai hợp đồng.

Hướng dẫn này sẽ giúp bạn khởi tạo và cấu hình một project Hardhat từ đầu, với các lệnh chi tiết để kiểm thử, triển khai và kiểm tra mã nguồn trên mạng blockchain mô phỏng.

## Yêu cầu hệ thống

- **Node.js** và **npm** đã được cài đặt.
- **Hardhat** phiên bản mới nhất.
- **Git** để quản lý mã nguồn.

## Cài đặt project

### Khởi tạo một thư mục project mới

Mở terminal và tạo thư mục mới cho project Hardhat:

```bash
mkdir CryptoZombieHardhatProject
cd CryptoZombieHardhatProject
```
### Khởi tạo một project Hardhat mới
Tạo project Hardhat bằng lệnh:

```bash
npm init -y
npm install --save-dev hardhat
npx hardhat
```
- Chọn mẫu project (ví dụ project bên trên tôi sử dụng mẫu JavaScript project).
- Khi được hỏi, chọn `Create a basic sample project`. Hardhat sẽ tạo ra các tệp mẫu, bao gồm:

- Thư mục `contracts` chứa các hợp đồng thông minh.
- Thư mục `scripts` chứa script triển khai.
- Thư mục `test` chứa các bài kiểm thử hợp đồng.
### Cấu hình Hardhat
Thêm cấu hình vào tệp hardhat.config.cjs nếu cần, ví dụ:

```javascript
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.18",
};
```
### Cài đặt thêm các gói cần thiết
Cài đặt các thư viện hỗ trợ Hardhat:

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install dotenv
```
### Cấu hình môi trường
Sử dụng tệp `.env` để lưu trữ các biến môi trường như `API_URL` và `PRIVATE_KEY` (các thông tin riêng tư muốn che giấu, dùng thư viện dotenv) sau đó push Git thì sẽ thêm tên file `.env` vào `.gitignore`:

```plaintext
API_URL=https://<Infura_or_Alchemy_URL>
PRIVATE_KEY=<Your_Private_Key>
```
### Cập nhật hardhat.config.cjs với biến môi trường
- Cấu hình như sau:
(thành phân thông tin riêng tư từ thư viện dotenv, phiên bản solidity tương ứng)
```javascript
require("dotenv").config();
module.exports = {
  solidity: "0.8.18",
  networks: {
    rinkeby: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```
### Các lệnh cơ bản:
### Kiểm tra trợ giúp Hardhat
Hiển thị các lệnh khả dụng:

```bash
npx hardhat help
```
### Chạy kiểm thử
Kiểm tra hợp đồng:

```bash
npx hardhat test
```
### Kiểm thử với báo cáo gas
Đo lường chi phí gas:

```bash
REPORT_GAS=true npx hardhat test
```
### Khởi động mạng node Hardhat cục bộ
Khởi chạy một node blockchain trên máy tính:

```bash
npx hardhat node
```
### Triển khai hợp đồng
Sử dụng mô-đun Ignition để triển khai hợp đồng:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
## Thông tin bổ sung
- **Git**: Project được khuyến khích quản lý qua Git để theo dõi các thay đổi.
- **MetaMask**: Dùng để kết nối với mạng blockchain thử nghiệm.
- **Hardhat Network**: Cung cấp một mạng blockchain cục bộ và cho phép thử nghiệm các tính năng mà không cần phí gas thực tế. (tôi sử dụng BNB Smart Chain Testnet).
## Minh họa:
![image](https://github.com/user-attachments/assets/1ce5118c-84d9-4d3d-bd6c-99b1de5cc857)
![image](https://github.com/user-attachments/assets/73d9274b-c8f7-4aff-9078-d2e754715a5f)
![image](https://github.com/user-attachments/assets/f3dd97e2-6a96-43c2-869f-cd403cf3044f)
![image](https://github.com/user-attachments/assets/7b793885-8df5-4d6a-9d8d-32a4beff18ca)

### Kết quả sau khi deploy lên BSC testnet
![image](https://github.com/user-attachments/assets/1dcaab66-3f1b-4b63-8cc0-289d86116b8a)
