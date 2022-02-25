import React, { useEffect, useState } from 'react';
import './App.css';
import WalletCard from './WalletCard.js';
import PayUserCard from './PayUserCard.js';

function App() {

  const [address, setAddress] = useState('No address yet!');

  return (
    <div className="App">
    <WalletCard addressChanger={setAddress}/>
    <PayUserCard address={address}/>
    <p>HI there</p>
    <p>{address}</p>
    </div>
  );
}

export default App;