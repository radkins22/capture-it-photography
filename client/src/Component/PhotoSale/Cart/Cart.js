import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../images/Products';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import "./cart.css"
import { CartItem } from './CartItem';
import axios from 'axios'


// This page is the cart, it displays how the added product is displayed in the cart
export const Cart = (props) => {
    // const { id } = props.data;
    const { id } = useState( props.data);

    const[itemId, setItemId] = useState(id)

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()

    const handleCart = () => {
        const formData = {
            itemId: itemId,
        };
        axios.post("http://localhost:8080/cart", formData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setItemId(id);
        navigate("/checkout")
    }

    return (
        <div className='cart'>
            <div>
                <h1 className='cartTitle'>Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                    return null;
                })}
            </div>
            {totalAmount > 0 ? (
                <div className='checkouts'>
                    <p style={{ textAlign: "center" }}> Subtotal: ${totalAmount} </p>
                    <button onClick={handleCart}> Checkout </button>
                    <button onClick={() => navigate("/photosale")}> Continue Shopping </button>
                </div>
            ) : (
                <div className='centerItems'>
                    <h1 className='cartTitle'>Your Cart Is Empty  </h1>
                    <button className='emptyCartBtn' onClick={() => navigate("/photosale")}> Click here to Shop</button>
                </div>
            )}
        </div>
    );
}