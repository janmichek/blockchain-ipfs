### Drizzle IPFS
This app will upload image to IPFS network and obtain CID of that file

This repository is inspired by tutorial:
https://www.youtube.com/watch?v=NvQbphs2nco


## Dependencies

- Ganache https://www.trufflesuite.com/ganache

Run Ganache quickstart Workspace

- IPFS server
```yarn global add ipfs```

## Init project
### Install dependencies
```cd frontend```

```yarn install```

### Compile contracts
```truffle compile --reset```

### Deploy contracts to blockchain
```truffle migrate --reset```

## Run project
```ipfs daemon```

```cd frontend```

```yarn serve```



## Troubleshooting
### CORS Issue

run this:
```
ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080 
ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001 
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"
```