import React, {useState} from 'react'
import './App.css'
import './WalletCard.js'
import WalletCard from './WalletCard.js';
const Web3 = require("web3");
const Ethers = require("ethers");

const PayUserCard = ({address}) => {  
    const [address1, setaddress1] = React.useState('');
    const [amount, setamount] = React.useState('');

    let infuraId = "1c722de80b77412f86091fdf4d04b74b";
    let infuraAddress = "https://rinkeby.infura.io/v3/" + infuraId;
    let web3 = new Web3(infuraAddress);

    const payAddress = () => {
      // WalletCard.defaultAccount
      alert(amount)
    }
  
    const handleAddressChange = (event) => {
      setaddress1(event.target.value);
    }

    const handleAmountCHange = (event) => {
      setamount(event.target.value);
    }

  
    return (
      <div>
        <table class="center_middle">
          <tr>
            <td>
            <button class = "button" onClick={payAddress}>
                  Enter Address to Pay
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <h3> Address to Pay: </h3>
              <input class = "text_box" onChange={handleAddressChange} name = "_address" placeholder="Type a message..." />
              <h3> Amount to Pay </h3>
              <input class = "text_box" onChange={handleAmountCHange} name = "_amount" placeholder="Type a message..." />
            </td>
            <td>
            <p>{address}</p>
            </td>
          </tr>
        </table>
      </div>
    )
}

export default PayUserCard;
