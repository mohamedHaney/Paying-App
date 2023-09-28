import InnerNav from "../../components/inner-nav/InnerNav";
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"
import img5 from "./images/img5.png"
import "./offers.css"
const Balance = () => {
  return (
    <>
      <InnerNav />
      <div className="offer-container">
        <div className="offer-div">
          <img src={img1} alt="" />
          <div className="offer-desc">
          <p>Mobile Recharge Offer Use Code FIRST20</p>
          <span>
            Get 20 % Instant cashback upto Rs 50 on your firs mobile recharge.
            T&C apply
          </span>
          </div>
        </div>
      </div>
      <div className="offer-container">
        <div className="offer-div">
        <img src={img2} alt="" />
          <div className="offer-desc">
          <p>Mobile Recharge Offer Use Code FIRST20</p>
          <span>
            Get 20 % Instant cashback upto Rs 50 on your firs mobile recharge.
            T&C apply
          </span>
          </div>
        </div>
      </div>
      <div className="offer-container">
        <div className="offer-div">
          <img src={img3} alt="" />
          <div className="offer-desc">
          <p>Mobile Recharge Offer Use Code FIRST20</p>
          <span>
            Get 20 % Instant cashback upto Rs 50 on your firs mobile recharge.
            T&C apply
          </span>
          </div>
        </div>
      </div>
      <div className="offer-container">
        <div className="offer-div">
          <img src={img4} alt="" />
          <div className="offer-desc">
          <p>Mobile Recharge Offer Use Code FIRST20</p>
          <span>
            Get 20 % Instant cashback upto Rs 50 on your firs mobile recharge.
            T&C apply
          </span>
          </div>
        </div>
      </div>
      <div className="offer-container">
        <div className="offer-div">
          <img src={img5} alt="" />
          <div className="offer-desc">
          <p>Mobile Recharge Offer Use Code FIRST20</p>
          <span>
            Get 20 % Instant cashback upto Rs 50 on your firs mobile recharge.
            T&C apply
          </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
