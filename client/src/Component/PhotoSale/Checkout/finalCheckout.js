import React from 'react'
import "./finalCheckout.css"
import { useNavigate } from 'react-router-dom'

// This page is specifially for letting the user know their order has been submitted
export const FinalCheckout = () => {

  const navigate = useNavigate()

  return (
    <div className='finalCheckout'>
      <h1 className='checkoutTitle'>
        Thank you for shopping!
      </h1>
      <h4>Your order has been submitted!</h4>
      <button className='emptyCartBtn' onClick={() => navigate("/")} >Return to Home</button>
    </div>
  )
}
