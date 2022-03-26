import React from "react";
import Navbar from "../Navbar";
import CartProduct from "./CartProduct";
import './Cart.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-box">
          <CartProduct />
        </div>
        <div className="order-box">
          <h2>Price Details</h2>
         <div className="total-details">
         <div className="price-content">
            <h3>Price(1)</h3>
            <h3>Discount</h3>
            <h3>Delivery Charges</h3>
            <h1>Total: </h1>
          </div>
          <div className="price">
            <h3>Rs1000</h3>
            <h3>-</h3>
            <h3>Free</h3>
            <h1>Rs 1000</h1>
          </div>
         </div>
        <div><button className="cart-btn"><FontAwesomeIcon icon={faBagShopping}/> Place Order</button></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
