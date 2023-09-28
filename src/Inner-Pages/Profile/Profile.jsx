import "./profile.css"
import InnerNav from "../../components/inner-nav/InnerNav"
const ProfileNav = () => {
  return(
    <>
      <InnerNav/>
    <div className="profile-main">
      <div className="first-div">
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="first-div-info">
          <span>Mo Salah Egyption King</span>
          <span className="level">level 4 ace member</span>
        </div>
      </div>
      <div className="second-div">
        <div className="second-div-info">
          <span className="numbers">872</span>
          <span>Transaction</span>
        </div>
        <div className="second-div-info">
          <span className="numbers">70</span>
          <span>Points</span>
        </div>
        <div className="second-div-info">
          <span className="numbers">290</span>
          <span>Rank</span>
        </div>
      </div>
      <div className="third-div">
        <span><i class="fa-solid fa-circle-arrow-right"></i>Explore</span>
        <span><i class="fa-regular fa-user"></i>Edit Profile</span>
        <span><i class="fa-solid fa-sliders"></i>Settings</span>
        <span><i class="fa-solid fa-share-nodes"></i>Share</span>
      </div>
      <div className="second-main">
        <div className="f">
          <div className="f-div"><i class="fa-solid fa-receipt f-i"></i>All Transactions <i class="fa-solid fa-chevron-right s-i"></i></div>
          <div className="f-div"><i class="fa-solid fa-circle-exclamation f-i"></i>Pending Transactions<i class="fa-solid fa-chevron-right s-i"></i></div>
          <div className="f-div"><i class="fa-solid fa-clock f-i"></i>Refund status<i class="fa-solid fa-chevron-right s-i"></i></div>
          <div className="f-div"><i class="fa-solid fa-triangle-exclamation f-i"></i>Raise an issue<i class="fa-solid fa-chevron-right s-i"></i></div>
          <div className="f-div"><i class="fa-solid fa-heart f-i"></i>Help and Support<i class="fa-solid fa-chevron-right s-i"></i></div>
        </div>
        <div className="s">
        <div className="s-div"><i class="fa-solid fa-circle-exclamation f-i"></i>About Us<i class="fa-solid fa-chevron-right s-i"></i></div>
        <div className="s-div"><i class="fa-solid fa-clock f-i"></i>Terms And Conditions<i class="fa-solid fa-chevron-right s-i"></i></div>
        <div className="s-div"><i class="fa-solid fa-triangle-exclamation f-i"></i>Feedback<i class="fa-solid fa-chevron-right s-i"></i></div>
        </div>
      </div>
    </div>
    </>
  )
}
 
export default ProfileNav;