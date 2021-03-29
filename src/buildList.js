const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const testnet = require('./tokens/testnet.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'BEP20 Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://tokens.julswap.com/images/0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F.png',
    'keywords': [
      'julswap',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...testnet
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
