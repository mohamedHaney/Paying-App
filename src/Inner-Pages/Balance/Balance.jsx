import InnerNav from "../../components/inner-nav/InnerNav";
import "./balance.css"
const Balance = () => {
  return (
    <>
    <InnerNav/>
    <div className="balance">
      <div className="balance-f-div">
        <span>Portifolio Value </span>
        <span className=" ss">$54,375</span>
        <span className="tt">In 3 Accounts</span>
      </div>
      <div className="balance-boxes">
          <div className="box">
            <span className="first-span">Federel Bank</span>
            <span className="second-span" >1142524899652</span>
            <span className="third-span">16,456.05</span>
          </div>
          <div className="box">
            <span className="first-span">States Bank</span>
            <span className="second-span" >1142524899652</span>
            <span className="third-span">2045.05</span>
          </div>
          <div className="box">
            <span className="first-span">Best Bank</span>
            <span className="second-span">1142524899652</span>
            <span className="third-span">35873.5</span>
          </div>
        </div>
        <button className="balance-btn">Add / Manage Accounts</button>
    </div>
    </>
  );
}
 
export default Balance;