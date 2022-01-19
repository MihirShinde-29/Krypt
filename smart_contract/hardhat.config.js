require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/zXOp_oBS2qJhsOlr4HJc-2zgfj7DrPL_',
      accounts: [ 'e5363386d5fbe1af3c9532b4cf46ebecec2e7b31fdd5fd3d5dcbc97a47276914' ]
    }
  }
}