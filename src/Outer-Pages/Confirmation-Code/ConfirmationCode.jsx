import "./confirmation-code.css"
import Navbar from "../../components/navBar/Navbar"
import { Link } from "react-router-dom";
const ConfirmationCode = () => {
  return ( 
    <>
      <Navbar/>
      <section className="confirm">
        <div className="confirm-home">
          <div className="confirm-text">We Sent You A Confirmation Code <br />Please Write It Below</div>
          <input type="number" placeholder="Confirmation Number Here" className="confirm-input" />
          <Link to={"/home"} className="confirm-btn">VERIVIY</Link>
          </div>
      </section>
    </>
  );
}

export default ConfirmationCode;