import {
  faCartArrowDown,
  faCartShopping,
  faHome,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { signOut } from "@firebase/auth"
import { authfirebase } from "../firebase";
import "./Home.css"
import { authActions } from "./store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import { cartActions } from "./store/cartSlice";

const Navbar = ({user}) => {
  const showCart = useSelector(state=> state.cart.showCart)
  const dispatchCart = useDispatch()
  const handleCart=()=>{
    dispatchCart(cartActions.setShowCart())
  }
  const dispatch= useDispatch()
  const logout = async()=>{
 try{
  await signOut(authfirebase)
  console.log('loggedout')
  dispatch(authActions.logout())
 }catch(error){
   console.log(error.message)
 }
  }
  // const userName= user.split('@')[0]

  return (
    <div className="header">
      <div className="navbar">
        <div className="nav-title">
          <FontAwesomeIcon icon={faCartShopping} />
          FakeCart
        </div>
        <div className="right-nav">
          {user && <p className="user"><FontAwesomeIcon icon={faUser}/>{user}</p>}


          {!showCart ?  <button className="btn" onClick={handleCart}>
            <FontAwesomeIcon icon={faCartArrowDown} /> Cart 
          </button> :  <button className="btn" onClick={handleCart}>
            <FontAwesomeIcon icon={faHome} /> Home 
          </button>}
       
          
            <button className="btn" onClick={logout}>
              Log out
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
