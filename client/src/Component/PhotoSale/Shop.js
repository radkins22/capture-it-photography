import React from 'react'
import { Product } from './Product';
import { PRODUCTS } from './images/Products';
import { useNavigate } from 'react-router-dom';
import "./shop.css"

// This is the monthly photo sale page, it displays what photos are for sale
export const Shop = () => {
    const navigate = useNavigate()

    return (
        <div className='shop'>
            <div >
                <h1 className='shopTitle'>Monthly Photo Sale</h1>
                <p className='giveBack'>* 3% of all proceeds go to helping victims of domestic violence.</p>
            </div>
            <div className='products'> {PRODUCTS.map((product) => <Product data={product}/>)}
            </div>
            <div className='cartBtn'>
            <button onClick={() => navigate("/cart")} className='goShop'>Go to Shopping Cart</button>
            </div>
        </div>
      );
}
