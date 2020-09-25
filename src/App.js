import React from 'react';
import './App.css';


function App () {
  return (
   <div>
   <div className="arrow"></div>
      
      <ul className="circle">
        <li>
          <div className="text">₹50 Cash</div>
        </li>
        <li>
          <div className="text">Extra Spin</div>
        </li>
        <li>
          <div className="text">2X Savings</div>
        </li>
        <li>
          <div className="text">₹100 Cashback</div>
        </li>
        <li>
          <div className="text">₹20 Cash</div>
        </li>
        <li>
          <div className="text">₹1000 Cash</div>
        </li>
        <li>
          <div className="text">1.5X Savings</div>
        </li>
        <li>
          <div className="text">2X Savings</div>
        </li>
      </ul>
      <button className="spin-button">SPIN</button>
      <h1>Spin the Wheel now to get the Rewards</h1>
   </div>
  );
}


export default App;
