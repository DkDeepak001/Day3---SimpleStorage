const contactABI = [{
    "constant": true,
    "inputs": [],
    "name": "data",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x73d4a13a"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_data",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4ed3885e"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x6d4ce63c"
  }];
const contractAddress = '0x8B95E5470d009bfbAfEf1a967d5A07bB90d394FA';

const web3 = new Web3('HTTP://127.0.0.1:7545');
const simpleStorage = new web3.eth.Contract(contactABI,contractAddress);

document.addEventListener("DOMContentLoaded",()=>{
    const $getData = document.getElementById('setDataInput');
    const $setData = document.getElementById('data');
    const $form = document.getElementById('setData');
    let accounts = [];

    //getting  account address from blockchain
    web3.eth.getAccounts()
    .then(results =>{
        accounts = results;
    });

    //call and setData in var and display in html
    const getData = () =>{
        simpleStorage.methods
        .get()
        .call()
        .then(result =>{
            $setData.innerHTML = result;
        });    
    };

    getData();

    $form.addEventListener('submit', e => {
        e.preventDefault();
        const value = e.target.elements[0].value;
        simpleStorage.methods
        .set(value)
        .send({from: accounts[0]})
        .then(getData);
    });

});