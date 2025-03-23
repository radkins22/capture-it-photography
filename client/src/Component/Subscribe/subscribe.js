import React, { useState } from 'react'
import "./subscribe.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// This function contains the functionality for the clients subscriber page, it included a form to be filled out along with a terms and conditions modal.
export const Subscribe = () => {
    const navigate = useNavigate()
    const [subscriberEmail, setSubscriberEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(true)


    // This function is for sending and storing all the users information to the server
    const handleSubscriber = () => {
        const formData = {
            subscriberEmail: subscriberEmail,
            password: password,
            repeatPassword: repeatPassword,
            rememberMe: !rememberMe,
        };
        axios.post("http://localhost:8080/subscribe", formData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setSubscriberEmail("");
        setPassword("");
        setRepeatPassword("");
        setRememberMe(true);
        alert("Thank you for subscribing!")
        navigate("/")
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='subscribe'>
            <form action="action_page.php" onSubmit={handleSubscriber}>
                <div className="containers">
                    <h1 className='subscribeTitle'>Subscribe Here</h1>
                    <p>Please fill in this form to recieve updates and coupons!</p>
                    <hr />
                    <label for="email"><b>Email</b></label>
                    <input className='inputs' type="text" placeholder="Enter Email" name="email" required onChange={(e) => setSubscriberEmail(e.target.value)} />

                    <label for="psw"><b>Password</b></label>
                    <input className='inputs' type="password" placeholder="Enter Password" name="psw" required onChange={(e) => setPassword(e.target.value)} />

                    <label for="psw-repeat"><b>Confirm Password</b></label>
                    <input className='inputs' type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={(e) => setRepeatPassword(e.target.value)} />

                    <label>
                        <input className='inputs' type="checkbox" name="remember" style={{ marginBottom: "15px" }} onChange={handleRememberMe} /> Remember me
                    </label>

                    <Button className="modalBtn" variant="primary" onClick={handleShow}>
                        <p>By creating an account you agree to our <span style={{ color: "dodgerblue" }}>Terms & Privacy</span>.</p>
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Terms & Privacy</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="terms">TERMS AND CONDITIONS
                            Last updated May 09, 2024
                            AGREEMENT TO OUR LEGAL TERMS
                            We are Capture It Photography ("Company," "we," "us," "our").
                            We operate the website http://www.captureitphotography.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                            You can contact us by phone at 800-000-000, email at captureitphotography@gmail.com, or by mail to: 123 Snap Shot Dr, Lincoln, Ne 68502, United States.
                            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Capture It Photography, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                            We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you within 48 hours as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
                            The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
                            We recommend that you print a copy of these Legal Terms for your records.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn button2">Cancel</button>
                        <button type="submit" className="signupbtn button2" >Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


