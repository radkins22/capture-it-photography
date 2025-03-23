import React, { useContext } from 'react'
import { ShopContext } from "./Context/ShopContext"
import "./shop.css"

// This page is specifially for how the product and product information is displayed on the shopping page using prop drilling
export const Product = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
      <img src={productImage} alt="img" />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart
        (id)}>Add To Cart {
          cartItemAmount > 0 && <>({cartItemAmount})</>
        }</button>
    </div>
  )
}
