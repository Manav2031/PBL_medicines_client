const Web3=require("web3")

const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_batchId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "addBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "batchId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "manufacturer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "NewBatchAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "batches",
      "outputs": [
        {
          "internalType": "address",
          "name": "manufacturer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "batchIds",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_batchId",
          "type": "bytes32"
        }
      ],
      "name": "getBatchDetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_batchId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_manufacturer",
          "type": "address"
        }
      ],
      "name": "verifyBatch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]; // Insert your contract's ABI here
  const contractAddress = '0x99B5997E173D9Bd0cF9D071988DAfb6644f2f892'; // Insert your contract's address here
  const web3 = new Web3('https://rpc2.sepolia.org/'); // Replace with the actual RPC server URL
  // const provider = window.ethereum;
  // contract.setProvider(web3.currentProvider);
  // console.log(stringToBytes32(med.batchID))
  const senderAddress='0x277E98450938C7751f656852040B41A6213ab82e';
  async function estimateGas(){
        const contract = await new web3.eth.Contract(contractAbi, contractAddress);

        const gasEstimate = await contract.methods.addBatch('0x6162636400000000000000000000000000000000000000000000000000000000',1000).estimateGas({ from: '0x277E98450938C7751f656852040B41A6213ab82e' });
        console.log(gasEstimate)
        // const txObject = {
        // from: senderAddress,
        // to: contractAddress,
        // data: contract.methods.addBatch('0x6162636400000000000000000000000000000000000000000000000000000000',1000).encodeABI(),
        // gas: gasEstimate , // gasBuffer is an additional amount of gas to account for any unforeseen operations
        // };
        // const receipt = await web3.eth.getTransactionReceipt(txObject);
        // console.log('Gas Used:', receipt.gasUsed);
    }

estimateGas()