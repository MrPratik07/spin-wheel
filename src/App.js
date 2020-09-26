import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name : "circle"
  }
//start Rotation
  startRotation = () => {
    this.setState ({
      name : "circle start-rotate"
    });
  
//stop Rotation    
  setTimeout (() => {
    this.setState({
        name: "circle start-rotate stop-rotate"
    });
  }, Math.floor(Math.random()*10000) + 1);  
    
  }
  
  render () {
  return (
   <div>
   <div className="arrow"></div>
      
      <ul className= {this.state.name}>
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
        <li>
          <div className="text">Laptop</div>
        </li>
        <li>
          <div className="text">Iphone</div>
        </li>
        <li>
          <div className="text">TV</div>
        </li>
        <li>
          <div className="text">Try Next Time</div>
        </li>
      </ul>
      <button className="spin-button" onClick = {this.startRotation}>SPIN</button>
      <h1>Spin the Wheel now to get the Rewards</h1>
   </div>
  );
}
};

export default App;
