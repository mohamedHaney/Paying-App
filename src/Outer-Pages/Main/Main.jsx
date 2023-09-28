import "./main.css"
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar/Navbar"
const Main = () => {
  return (
    <>
    <Navbar/>
    <div className="landing">
      <div className="imgtext">
      <div className="first-title">MAKE ONLINE <br /> PAYMENTS WITH US,<br/> <span>EARN REWARDS</span> </div>
      <div className="img"><img src="./images/20943646-removebg-preview.png" alt="" /></div>
      </div>
      <div className="second-title">online payments made easy with us text us and we make the payments instantly while you earn special rewards! its a win-win for you!</div>
      <Link to={"/register"} className="get-started">Get Started</Link>
    </div>
    </>
  );
}
export default Main;