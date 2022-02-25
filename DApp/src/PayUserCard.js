import React, {useState} from 'react'
import {ethers} from 'ethers'
import './App.css'

const PayUserCard = props => {  
    const [textInput, setTextInput] = React.useState('');
  
    const payAddress = () => {
      alert(textInput)
      //props.send(textInput);
    }
  
    const handleChange = (event) => {
      setTextInput(event.target.value);
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
              <input class = "text_box" onChange={handleChange} placeholder="Type a message..." />
            </td>
          </tr>
        </table>
      </div>
    )
}

export default PayUserCard;
