import SimpleIPFSStore from './contracts/SimpleIPFSStore.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545'
    }
  },
  contracts: [SimpleIPFSStore],
  polls: {
    accounts: 15000
  }
}

export default options
