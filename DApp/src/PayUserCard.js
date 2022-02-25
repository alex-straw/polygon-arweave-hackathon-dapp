import React, {useState} from 'react'
import {ethers} from 'ethers'
import './App.css'

const PayUserCard = props => {  
    const [address1, setaddress1] = React.useState('');
    const [amount, setamount] = React.useState('');
    
    const payAddress = () => {
      alert(address1, amount)
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

            </td>
          </tr>
        </table>
      </div>
    )
}

export default PayUserCard;
