import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ray from "./ray.png"
import trish from "./trish.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import "./contact.css"

// This is our contact page, which displays all contact info for the clients businesss
const Contact = () => {
  return (
    <div className="contacts">
      <div className='flex'>
        <Row md={2} className="g-4">
          <Col>
            <Card className="trisha" style={{ height: "48rem", width: '34rem' }}>
              <Card.Img variant="top" src={trish} style={{ height: "28rem", width: '33.25rem' }} />
              <Card.Body>
                <Card.Title>Trisha Gibbs</Card.Title>
                <Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cell Number: (402)730-7107</ListGroup.Item>
                    <ListGroup.Item>Address: 123 Snap Shot Drive Lincoln, Nebraska 68502</ListGroup.Item>
                    <ListGroup.Item>Personal Email: Gibbs_photo@gmail.com </ListGroup.Item>
                    <ListGroup.Item>Business Email: captureitphotography@gmail.com</ListGroup.Item>
                  </ListGroup>
                  <div className='flexIcons'>
                    {/*These are social media links for each contact personell */}
                    <Link><FaInstagramSquare className='instagram' /></Link>
                    <Link><IoLogoLinkedin className='linked' /></Link>
                    <Link><FaFacebookSquare className='facebook' /></Link>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="rachael" style={{ height: "48rem", width: '34rem' }}>
              <Card.Img variant="top" src={ray} style={{ height: "28rem", width: '33.25rem' }} />
              <Card.Body>
                <Card.Title>Rachael Higgins</Card.Title>
                <Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cell Number: (402)440-6066</ListGroup.Item>
                    <ListGroup.Item>Address: 123 Snap Shot Drive Lincoln, Nebraska 68502</ListGroup.Item>
                    <ListGroup.Item>Personal Email: Higgins_photo@gmail.com </ListGroup.Item>
                    <ListGroup.Item>Business Email: captureitphotography@gmail.com</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <div className='flexIcons'>
                  <Link><FaInstagramSquare className='instagram' /></Link>
                  <Link><IoLogoLinkedin className='linked' /></Link>
                  <Link><FaFacebookSquare className='facebook' /></Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;