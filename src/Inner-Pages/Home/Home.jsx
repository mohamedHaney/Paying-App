import InnerNav from "../../components/inner-nav/InnerNav";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
          <InnerNav/>
      <div className="home-container">
      <div className="home-main first">
          <div className="title">Money Transfere</div>
          <div className="icons">
            <Link><i className="fa-solid fa-qrcode"></i>Scan QR Code</Link>
            <Link><i className="fa-regular fa-paper-plane"></i>Send To Contact</Link>
            <Link><i className="fa-solid fa-building-columns"></i>Send To Bank</Link>
            <Link><i className="fa-solid fa-rotate"></i>Self Transfer</Link>
          </div>
        </div>
        <div className="home-main">
          <div className="title">Recharge & Bill Payments</div>
          <div className="icons">
            <Link><i className="fa-solid fa-mobile-screen-button"></i>Mobile Recharge</Link>
            <Link><i className="fa-solid fa-plug"></i>Electricity Bill</Link>
            <Link><i className="fa-regular fa-circle-play"></i>DTH Recharge</Link>
            <Link><i class="fa-solid fa-receipt"></i>Postpaid Bill</Link>
          </div>
        </div>
        <div className="home-main">
          <div className="title">Ticket Booking</div>
          <div className="icons">
            <Link><i className="fa-solid fa-film"></i>Movies</Link>
            <Link><i className="fa-solid fa-train-subway"></i>Trains</Link>
            <Link><i className="fa-solid fa-bus"></i>Bus</Link>
            <Link><i className="fa-solid fa-plane"></i>Flights</Link>
            <Link><i className="fa-solid fa-car-side"></i>Car</Link>
          </div>
        </div>
        <div className="home-main">
          <div className="title">More Services</div>
          <div className="icons">
            <Link><i className="fa-solid fa-chart-simple"></i>Invest</Link>
            <Link><i className="fa-solid fa-percent"></i>Loans</Link>
            <Link><i className="fa-regular fa-heart"></i>Insurance</Link>
            <Link><i className="fa-solid fa-gauge-simple-high"></i>Fastag</Link>
          </div>
        </div>
        <div className="home-main">
          <div className="title">Recent Transactions</div>
          <div className="icons recent-transactions">
            <div className="recent-transactions">
            <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1695293986~exp=1695294586~hmac=13c799028891e098847f293b4fd8af731a0f505f71e8c9c20950f9e559e87d26" alt="" />
              <p>Mohamd</p>
              </div>
              <div className="recent-transactions">
              <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1695293986~exp=1695294586~hmac=13c799028891e098847f293b4fd8af731a0f505f71e8c9c20950f9e559e87d26" alt="" />
              <p>Mazen</p>
              </div>
              <div className="recent-transactions">
              <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1695293986~exp=1695294586~hmac=13c799028891e098847f293b4fd8af731a0f505f71e8c9c20950f9e559e87d26" alt="" />
              <p>Mahmoud</p>
              </div>
              <div className="recent-transactions">
              <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1695293986~exp=1695294586~hmac=13c799028891e098847f293b4fd8af731a0f505f71e8c9c20950f9e559e87d26" alt="" />
              <p>Mostafa</p>
              </div>
          </div>
        </div>
        <Link to={"/recieve"} className="main-link"><button className="recive-money-but">Recieve Money</button></Link>
        </div>
    </>
  );
};

export default Home;
