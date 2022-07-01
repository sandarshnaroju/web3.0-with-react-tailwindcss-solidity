// https://eth-goerli.alchemyapi.io/v2/87_XBDlX2ZqSg0hxV9QLV-3lympdTzC4

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/87_XBDlX2ZqSg0hxV9QLV-3lympdTzC4",
      accounts: [
        "b26534e751ceb499eb4110f2d8fe4c0296543b65b0b27cf4e4a54b581e8221bc",
      ],
    },
  },
};
