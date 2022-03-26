import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./CartProduct.css";
const CartProduct = ({ name, id, price, totalPrice, quantity, image }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={image} className="productimage" alt="productimage" />
      </div>
     <div className='Details'>
     <div className="cart-product-details">
        <h2>{name}</h2>

        <div className='CartProductList'>
        <p>quantity: {quantity}</p>
        <p>Price: {price}</p>
        <p>Total price: {totalPrice}</p>
        </div>
      </div>
      <div className="CartButtons">
        <button
          className="addbtn"
          onClick={() =>
            dispatch(
              cartActions.addToCart({
                name,
                id,
                price,
                image,
              })
            )
          }
        >
          Add item
        </button>
        <button
          className="removebtn"
          onClick={() => dispatch(cartActions.removeFromCart(id))}
        >
          Remove item
        </button>
      </div>
     </div>
    </div>
  );
};

export default CartProduct;
