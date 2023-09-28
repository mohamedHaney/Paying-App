import InnerNav from "../../components/inner-nav/InnerNav";
import img1 from "./image 16.png"
import img2 from "./image 19.png"
import "./rewards.css"
const Rewards = () => {
  return (
    <>
    <InnerNav/>
    <div className="main-cash">
      <div className="cash-earned">
        <span className="first-s">Cashbacks</span>
        <span className="second-span" >₹507</span>
        <span className="third-span">+ 88 Rs This month</span>
        <button>View your cashbacks history<i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className="collect-rewards">
        <div className="rewards-big-box">
          <img src={img1} alt="" />
          <div className="rewards-box">
            <span>Flat 50 off On food Delivery</span>
            <span>On orders above 99 on Swaggy, Somato</span>
            <button>Collect Now</button>
          </div>
        </div>
        <div className="rewards-big-box">
          <img src={img2} alt="" />
          <div className="rewards-box">
            <span>Flat 50 off On food Delivery</span>
            <span>On orders above 99 on Swaggy, Somato</span>
            <button>Collect Now</button>
          </div>
        </div>
        <div className="rewards-big-box">
          <img src={img1} alt="" />
          <div className="rewards-box">
            <span>Flat 50 off On food Delivery</span>
            <span>On orders above 99 on Swaggy, Somato</span>
            <button>Collect Now</button>
          </div>
        </div>
        <div className="rewards-big-box">
          <img src={img2} alt="" />
          <div className="rewards-box">
            <span>Flat 50 off On food Delivery</span>
            <span>On orders above 99 on Swaggy, Somato</span>
            <button>Collect Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default Rewards;