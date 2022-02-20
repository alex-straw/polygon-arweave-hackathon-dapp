import React from 'react';
import './App.css';

function App() {

  const Web3 = require("web3");
  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.request({method: 'eth_requestAccounts'});
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  }

  //var provider = 'https://rinkeby.infura.io/v3/24f02b882c0b4b7da3b4ce9b4cd2a73a';
  //var web3 = new Web3(provider);  

  return (
    <div>
      <h1 class = "center_middle title"> Title </h1>

      <table class = "center_middle standard_text">
        <tr>
          <td>
            <button class="button" onClick={ethEnabled}>
              Connect MetaMask
            </button>
          </td>
        </tr>
      </table>
    </div>
  );

}

export default App;