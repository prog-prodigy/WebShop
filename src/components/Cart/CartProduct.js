import React from 'react'
import image1 from '../../images/shoe.jpg'
import './CartProduct.css'
const CartProduct = () => {
  return (
    <div className='cart-product'>
        <div className='cart-product-img'>
            <img src={image1} className='productimage' alt='productimage'/>
        </div>
        <div className='cart-product-details'>
        <h2>Product: Name</h2>
           
                <p>quantity: 1</p>
                <p>Price: 1000</p>
                <p>Total price: 1000</p>
            
        </div>
    </div>
  )
}

export default CartProduct