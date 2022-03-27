import React from "react";
import "./Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-confetti";
import Home from '../Home'
const OrderPlaced = ({setOrder}) => {
  const days = Math.round(Math.random() * 7) + 1;
  return (
    <div className="body">
      <Confetti />
      <div className="orderplaced-box">
          <div className="orderPlaced-text">
          <h2>Order placed successfully </h2>
        <h4>Your order will reach you in {days} days</h4>
          </div>
      
        <h1 className="truck">
          <FontAwesomeIcon icon={faTruckFast} />
        </h1>
        <button className="cart-btn" onClick={()=>setOrder(false)}> Ok </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
