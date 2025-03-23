import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./schedule.css"
import Row from 'react-bootstrap/Row';
import picsHanging from "../Images/picsHanging.jpg"
import cam from "../Images/cameraOffice.jpg"

// This page is where the form is for scheduling an appointment
function ScheduleAppt() {
  // all use states and variables
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [eventType, setEventType] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState(Date.now)

  // Connecting frontend to backend function
  const button = () => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      eventType: eventType,
      location: location,
      date: date
    };
    axios.post("http://localhost:8080/appt",
      formData)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setEventType("")
    setLocation("")
    setDate(Date.now)
    alert("Thank you for scheduling, we will contact you shortly!")
    navigate("/contact")
  }

  return (
    <div className='body'>
      {/* background image */}
      <div>
        <img src={picsHanging} alt="picsHanging" className="pics" />
      </div>
      {/* Schedule appt form */}
      <Form required onSubmit={button} className="backing">
        <Row className="mb-3">
          {/* first name input block */}
          <Form.Group as={Col} style={{ width: "300px" }} controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          {/* Last name input block */}
          <Form.Group as={Col} style={{ width: "300px" }} controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* Email input block */}
          <Form.Group as={Col} style={{ width: "300px" }} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group as={Col} style={{ width: "300px" }} controlId="formBasicPhone">
            <Form.Label>Contact number</Form.Label>
            <Form.Control type="phone-number" placeholder="Enter contact number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </Form.Group>

        </Row>
        <Row className="mb-4">
          {/* Event input block */}
          <Form.Group as={Col} style={{ width: "300px" }} controlId="validationCustom03" required>
            <Form.Label> Choose Event </Form.Label>
            <Form.Select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              <option>Event Type</option>
              <option value="1">Wedding</option>
              <option value="2">Graduation</option>
              <option value="3">Birthday</option>
              <option value="4">Portraits</option>
              <option value="5">Business</option>
            </Form.Select>
          </Form.Group>
          {/* Location input block */}
          <Form.Group as={Col} style={{ width: "300px" }} controlId="validationCustom03">
            <Form.Label>Event Location</Form.Label>
            <Form.Control type="text" placeholder="Event Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </Form.Group>
        </Row>
        <Row Row className="mb-4 centerDate">
          {/* Date input block */}
          <Form.Group as={Col} style={{ width: "300px" }} action="/action_page.php" controlId="validationCustom04">
            <Form.Label for="birthdaytime">Please book a date and time:</Form.Label>
            <Form.Control type="datetime-local" id="birthdaytime" name="birthdaytime"
              value={date} onChange={(e) => setDate(e.target.value)} required />
          </Form.Group>
        </Row>
        {/* Submit button */}
        <Button type="submit" className="buttons" >Submit form</Button>
      </Form>
      {/* Background pic */}
      <div>
        <img src={cam} alt="cam" className="pics" />
      </div>
    </div>
  );
}

export default ScheduleAppt;