import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import "./checkout.css"
import { useNavigate } from 'react-router-dom'
import { RiVisaFill } from "react-icons/ri";
import { LiaCcAmex } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa";
import { LiaCcDiscover } from "react-icons/lia";
import axios from 'axios';

// This page is specifically for our checkout, once the user has finalized there cart, they come to this page in order to enter payment information
export const Checkout = () => {

    const { getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const shipping = 14.99
    const tax = parseInt(totalAmount * 0.07)
    const total = (totalAmount + tax + shipping).toFixed(2)


    const navigate = useNavigate()
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState(null)
    const [isChecked, setIsChecked] = useState(true)

    const [fullName2, setFullName2] = useState("");
    const [email2, setEmail2] = useState("")
    const [address2, setAddress2] = useState("")
    const [city2, setCity2] = useState("")
    const [state2, setState2] = useState("")
    const [zipcode2, setZipcode2] = useState(null)

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState(null)
    const [expMonth, setExpMonth] = useState("")
    const [expYear, setExpYear] = useState(null)
    const [cardCVV, setCardCVV] = useState(null)

    const [storeTotal, setStoreTotal] = useState(total)

// this function sends and stores all the users payment info to our server
    const submitButton = (e) => {
        e.preventDefault();
        const formData = {
            fullName: fullName,
            email: email,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            isChecked: !isChecked,

            fullName2: fullName2,
            email2: email2,
            address2: address2,
            city2: city2,
            state2: state2,
            zipcode2: zipcode2,

            cardName: cardName,
            cardNumber: cardNumber,
            expMonth: expMonth,
            expYear: expYear,
            cardCVV: cardCVV,
            storeTotal: storeTotal

        };
        axios.post("http://localhost:8080/checkout",
            formData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setFullName("")
        setEmail("")
        setAddress("")
        setCity("")
        setState("")
        setZipcode(null)
        setIsChecked(true)

        setFullName2("")
        setEmail2("")
        setAddress2("")
        setCity2("")
        setState2("")
        setZipcode2(null)

        setCardName()
        setCardNumber(null)
        setExpMonth("January")
        setExpYear(null)
        setCardCVV(null)
        setStoreTotal(total)

        navigate("/finalCheckout")
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }



    return (
        <div className='checkout'>
            <div>
                <h1 style={{ textAlign: "center", fontFamily: "times", color: "white", 
                margin: "3% 0 3% 0"
                }} className='checkoutTitle'>Checkout</h1>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <form action="action_page.php" onSubmit={submitButton}>
                                <div className="row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label className='label' for="fname"><i className="fa fa-user"></i> Full Name</label>
                                        <input className='input' type="text" id="fname" name="fullname" placeholder="John M. Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                                        <label className='label' for="email"><i className="fa fa-envelope"></i> Email</label>
                                        <input className='input' type="text" id="email" name="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        <label className='label' for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                        <input className='input' type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={address} onChange={(e) => setAddress(e.target.value)} required />
                                        <label className='label' for="city"><i className="fa fa-institution"></i> City</label>
                                        <input className='input' type="text" id="city" name="city" placeholder="New York" value={city} onChange={(e) => setCity(e.target.value)} required />
                                        <div className="row">
                                            <div className="col-50">
                                                <label for="state">State</label>
                                                <input className='input' type="text" id="state" name="state" placeholder="NY" value={state} onChange={(e) => setState(e.target.value)} required />
                                            </div>
                                            <div className="col-50">
                                                <label className='label' for="zip">Zip</label>
                                                <input className='input' type="text" id="zip" name="zip" placeholder="10001" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
                                            </div>
                                        </div>
                                        <label className='label'>
                                            <input className='input' type="checkbox" name="sameadr" value={isChecked} onChange={handleCheckboxChange} required /> Shipping address same as billing
                                        </label>
                                    </div>
                                    <div className="col-50">
                                        <h3>Shipping Address <span className='smallFont'>(If different than billing address)</span></h3>
                                        <label className='label' for="fname"><i className="fa fa-user"></i> Full Name</label>
                                        <input className='input' type="text" id="fname" name="firstname" placeholder="John M. Doe" value={fullName2} onChange={(e) => setFullName2(e.target.value)} />
                                        <label className='label' for="email"><i className="fa fa-envelope"></i> Email</label>
                                        <input className='input' type="text" id="email" name="email" placeholder="john@example.com" value={email2} onChange={(e) => setEmail2(e.target.value)} />
                                        <label className='label' for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                        <input className='input' type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                        <label className='label' for="city"><i className="fa fa-institution"></i> City</label>
                                        <input className='input' type="text" id="city" name="city" placeholder="New York" value={city2} onChange={(e) => setCity2(e.target.value)} />
                                        <div className="row">
                                            <div className="col-50">
                                                <label className='label' for="state">State</label>
                                                <input className='input' type="text" id="state" name="state" placeholder="NY" value={state2} onChange={(e) => setState2(e.target.value)} />
                                            </div>
                                            <div className="col-50">
                                                <label className='label' for="zip">Zip</label>
                                                <input className='input' type="text" id="zip" name="zip" placeholder="10001" value={zipcode2} onChange={(e) => setZipcode2(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-50">
                                        <h3>Payment</h3>
                                        <label for="fname">Accepted Cards</label>
                                        <div className="icon-container">

                                            <i className="fa fa-cc-visa" style={{ color: "navy", fontSize: "30px" }}>     <RiVisaFill /></i>
                                            <i className="fa fa-cc-amex" style={{ color: "blue", fontSize: "32px" }}>   <LiaCcAmex /></i>
                                            <i className="fa fa-cc-mastercard" style={{ color: "maroon", fontSize: "30px" }}> <FaCcMastercard /></i>
                                            <i className="fa fa-cc-discover" style={{ color: "orange", fontSize: "32px" }}> < LiaCcDiscover /></i>
                                        </div>
                                        <label className='label' for="cname">Name on Card</label>
                                        <input className='input' type="text" id="cname" name="cardname" placeholder="John More Doe" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
                                        <label className='label' for="ccnum">Credit card number</label>
                                        <input className='input' type="text" id="ccnum" name="cardnumber" placeholder="1111222233334444" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                                        <label className='label' for="expmonth">Exp Month</label>
                                        <select className='input' type="text" id="expmonth" name="expmonth" placeholder="January" value={expMonth} onChange={(e) => setExpMonth(e.target.value)} required>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                        <div className="row">
                                            <div className="col-50">
                                                <label className='label' for="expyear">Exp Year</label>
                                                <input className='input' type="text" id="expyear" name="expyear" placeholder="2024" value={expYear} onChange={(e) => setExpYear(e.target.value)} required />
                                            </div>
                                            <div className="col-50">
                                                <label className='label' for="cvv">CVV</label>
                                                <input className='input' type="text" id="cvv" name="cvv" placeholder="352" value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='totalCheckout'>
                                    <p>Subtotal: ${totalAmount}</p>
                                    <p>Tax: ${tax}</p>
                                    <p>Shipping: ${shipping}</p>
                                    <p>Total: ${total}</p>
                                </div>
                                <input type="submit" value="Submit Order" className="btn" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
