import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Outer-Pages/Login/Login";
import Main from "./Outer-Pages/Main/Main";
import AboutUs from "./Outer-Pages/About-Us/AboutUs";
import Register from "./Outer-Pages/Register/Register";
import Contact from "./Outer-Pages/Contact/Contact";
import HowItWorks from "./Outer-Pages/how-it-works/HowItWorks";
import HelpAndSupport from "./Outer-Pages/Help-And-Support/HelpAndSupport";
import ConfirmationCode from "./Outer-Pages/Confirmation-Code/ConfirmationCode";
import Home from "./Inner-Pages/Home/Home";
import Balance from "./Inner-Pages/Balance/Balance"
import Offers from "./Inner-Pages/Offers/Offers"
import Profile from "./Inner-Pages/Profile/Profile"
import Rewards from "./Inner-Pages/Rewards/Rewards"
import Notifications from "./Inner-Pages/Notifications/Notifications";
import Recieve from "./Inner-Pages/Recieve/Recieve";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/how-it-works" element={<HowItWorks/>} />
    <Route path="/help-and-support" element={<HelpAndSupport/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/confirmation-code" element={<ConfirmationCode/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/balance" element={<Balance/>} />
    <Route path="/offers" element={<Offers/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/rewards" element={<Rewards/>} />
    <Route path="/notifications" element={<Notifications/>} />
    <Route path="/recieve" element={<Recieve/>} />
    
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
