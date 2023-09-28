import InnerNav from "../../components/inner-nav/InnerNav";
import "./notifications.css"
const Notifications = () => {
  return (
    <>
    <InnerNav/>
    <div className="notific">
      <i class="fa-regular fa-bell"></i>
      <span className="notific-fs">no notifications yet</span>
      <span className="notific-ss">No notification you're all caught up for now</span>
    </div>
    </>
  );
}
 
export default Notifications;