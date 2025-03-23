import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import "../shop.css"

// This page is for updating our cart and cart amount based on the amount of items that are added or deleted, prop drilling is also used here in order to display all the product information
export const CartItem = (props) => {

    const { id, productName, size, price, productImage } = props.data;
    const { removeFromCart, cartItems, addToCart, updateCartItemCount } = useContext(ShopContext)

    return (
        <div className='cartItem'>
            <div className='flexCartItems'>
                <img src={productImage} alt="img" />
                <div className='description'>
                    <p><b>{productName}</b></p>
                    <p>{size}</p>
                    <p>${price}</p>
                    <div className='countHandler'>
                        <button className="countBtns" onClick={() => removeFromCart(id)}> - </button>
                        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                        <button className="countBtns" onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
