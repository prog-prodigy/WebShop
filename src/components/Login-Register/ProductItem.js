import "./Product.css";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingBag, faTrashCan} from '@fortawesome/free-solid-svg-icons'

const ProductItem = ({ item }) => {
  
  const showRemoveBtn = useSelector(state => state.cart.itemsList) 
  // const getIds= showRemoveBtn.map(item=> item.id)  

    const dispatch=useDispatch()
    const addItem=()=>{
        dispatch(cartActions.addToCart({
            name: item.name,
            id:item.id,
            price:item.price,
            image: item.image
        }))
        
    }
    const removeItem=()=>{
      dispatch(cartActions.removeFromCart(item.id))

    }
 
  return (
    <div className="box">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="img-box"
      >
        <img className="img" src={item.image} alt={item.name} />
      </motion.div>
      <h2 className="product-title">{item.name}</h2>
      <div className="description">
       
        <span>Rs. {item.price}</span>
        <span>Rating: {item.rating}</span>
      </div>
    <div className="Cartbtn">
    <button className="addbtn" onClick={addItem}><FontAwesomeIcon icon={faShoppingBag}/> Add</button>
     <button className="removebtn" onClick={removeItem}><FontAwesomeIcon icon={faTrashCan}/>Remove</button> 
    </div>
    </div>
  );
};

export default ProductItem;
