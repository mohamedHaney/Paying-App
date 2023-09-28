import InnerNav from "../../components/inner-nav/InnerNav"
import Qr from "./photo_2022-04-26_18-32-00 1.png"
import "./recieve.css"

const Recieve = () => {
  return (
    <>
    <InnerNav/>
    <div className="main-qr-code">
    <div className="qr">
      <span>Recieve Money</span>
      <img src={Qr} alt="" />
    </div>
    <div className="other-options">
      <span>Other Options</span>
      <input type="text" placeholder="Your Pay ID   mohamed@524899652" />
      <button>Show balance account details<i class="fa-solid fa-chevron-right"></i></button>
    </div>
    </div>
    </>
  );
}
 
export default Recieve;