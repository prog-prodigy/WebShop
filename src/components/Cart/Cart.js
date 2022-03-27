import React, { useState } from "react";
import Navbar from "../Navbar";
import CartProduct from "./CartProduct";
import './Cart.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import OrderPlaced from "./OrderPlaced";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const [order,setOrder]=useState(false)
const dispatch= useDispatch()
  const logItem= useSelector(state=> state.cart.totalQuantity)
  const getitem = useSelector(state=> state.cart.itemsList)
  console.log(logItem)
  if(logItem){

    var renderProduct = getitem.map(item=>{
      return <CartProduct image={item.image} name={item.name} id={item.id} quantity={item.quantity} price={item.price} totalPrice={item.totalPrice}/>
    })
  }else{
    renderProduct= <h1 className="emptyCart">No items in your Cart</h1>
  }
const totalQuantity= useSelector(state=> state.cart.totalQuantity)
 if(logItem.length){
  var priceArray= logItem.map(item=> item.totalPrice)
  var totalPriceData = priceArray.reduce((acc,ins)=>{
    return acc+ins
  })
  var discount = Math.round(Math.random()*70)
  var finalPrice = (totalPriceData-((totalPriceData/100)*discount)).toFixed(2)
  
 }else{
  totalPriceData = '--'
  discount = '--'
  finalPrice = '--'
 }
const setOrderPage=()=>{
  setOrder(true)
  dispatch(cartActions.emptyCart())
}
  return (
    <>
      <Navbar />
    {order ?   <OrderPlaced setOrder={setOrder} />:  <div className="cart-container">
        <div className="cart-box">
          {renderProduct}
          
        </div>
        <div className="order-box">
          <h2>Price Details</h2>
         <div className="total-details">
         <div className="price-content">
            <h3>Price({totalQuantity}{totalQuantity>1 ? ' items':' item'})</h3>
            <h3>Discount</h3>
            <h3>Delivery Charges</h3>
            <h1>Total: </h1>
          </div>
          <div className="price">
            <h3>Rs {totalPriceData}</h3>
            <h3>{discount}%</h3>
            <h3>Free</h3>
            <h1>Rs {finalPrice}</h1>
          </div>
         </div>
        <div>{!logItem ? <button disabled style={{cursor:'not-allowed'}}  className="cart-btn">Cart Empty</button>:
       <button onClick={setOrderPage } className="cart-btn"><FontAwesomeIcon icon={faBagShopping}/> Place Order</button>}</div>
        </div>
      </div>}
     
    </>
  );
};

export default Cart;
