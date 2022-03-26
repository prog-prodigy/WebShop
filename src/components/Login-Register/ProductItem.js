import "./Product.css";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const ProductItem = ({ item }) => {
    const dispatch=useDispatch()
    const addItem=()=>{
        dispatch(cartActions.addToCart({
            name: item.name,
            id:item.id,
            price:item.price
        }))
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
      <div className="description">
        <h2>{item.name}</h2>
        <p>Rs. {item.price}</p>
        <p>Rating: {item.rating}</p>
      </div>
      <button onClick={addItem}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
