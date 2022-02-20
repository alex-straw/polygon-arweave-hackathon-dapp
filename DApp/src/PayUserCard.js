import React, {useState} from 'react'
import {ethers} from 'ethers'

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
        <input onChange={handleChange} placeholder="Type a message..." />
        <button onClick={payAddress}>
            Enter Address to Pay
        </button>
      </div>
    )
}

export default PayUserCard;
