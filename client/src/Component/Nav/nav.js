import "./nav.css"
import { GiPhotoCamera } from "react-icons/gi";
import { Link } from "react-router-dom";

// This page links all of our navbar links to the proper pages
function MyNav() {
  return (
    <div className="myNav">
      <div>
        <Link to="/gallery" style={{ textDecorationLine: "none" }}><GiPhotoCamera style={{ width: "60px", height: "45px", color: " rgb(13, 125, 181)" }} /><span className='logo' >Capture It Photography</span></Link>
      </div>
      <div className="divbar">
        <div className="link">
          <Link to="/" style={{ color: "black", textDecorationLine: "none" }}>Home</Link>
        </div>
        <div className="link">
          <Link to="/gallery" style={{ color: "black", textDecorationLine: "none" }}>Gallery</Link>
        </div>
        <div className="link">
          <Link to="/appt" style={{ color: "black", textDecorationLine: "none" }}>Schedule Appointment</Link>
        </div>
        <div className="link">

          <Link to="/photoSale" style={{ color: "red", textDecorationLine: "none" }}>Photo Sale</Link>
        </div>
        <div className="link">
          <Link to="/Cart" style={{ color: "black", textDecorationLine: "none" }}> Shopping Cart🛒</Link>
        </div>
        <div className="link">
          <Link to="/contact" style={{ color: "black", textDecorationLine: "none" }}>Contact</Link>
        </div>
        <div className="link">
          <Link to="/subscribe" style={{ color: "rgb(13, 125, 181)", textDecorationLine: "none" }}>Subscribe Here</Link>
        </div>
      </div>
    </div>
  );
}

export default MyNav;