### Blockchain IPFS with Drizzle
This app will upload image to IPFS network and obtain CID of that file.
It is also using basic Drizzle implementation.

This repository is inspired by following tutorial:
https://www.youtube.com/watch?v=NvQbphs2nco

## Dependencies
- Ganache https://www.trufflesuite.com/ganache
- Node JS
- Yarn
- IPFS server 
- ```yarn global add ipfs```

## Init project

### Deploy contracts to blockchain

Run Ganache quickstart Workspace

```yarn deploy```

### Install dependencies

```cd frontend```

```yarn install```

## Run project

```ipfs daemon```

```cd frontend```

```yarn serve```

### Init Metamask account

Login to Metamask

Go to Ganache and copy private key of first account

Open Metamask

Switch to Ganache Network

Click Import account

Paste private key

Connect Account

Open app on http://localhost:8080/



## Troubleshooting
### CORS Issue

run this:
```
ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080 
ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001 
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"
```