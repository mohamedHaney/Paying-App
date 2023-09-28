import "./login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar/Navbar"
import React from "react";
import bgImg from "../Register/reg.jpg";

function Login() {

  return (
    <section className="log-body">
      <Navbar/>
      <div className="login">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Login and enjoy the service</span>
          <form
            id="form"
            className="flex flex-col"
          >
            <input
              type="email"
              placeholder="email"
              required
            />
            <input
              type="text"
              placeholder="password"
              required
            />
            <input
              type="text"
              placeholder="mobile number"
              required
            />
            <Link to={"/home"} className="btn">Login</Link>
            <Link to={"/register"} className="sign-up">you dont have account ? <br /> <span className="span">sign up now</span></Link>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Login;
// import "./login.css";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/navBar/Navbar"
// import React from "react";
// import bgImg from "../Register/reg.jpg";
// import { useForm } from "react-hook-form";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <section className="log-body">
//       <Navbar/>
//       <div className="login">
//         <div className="col-1">
//           <h2>Sign In</h2>
//           <span>Login and enjoy the service</span>
//           <form
//             id="form"
//             className="flex flex-col"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <input
//               type="email"
//               {...register("email")}
//               placeholder="email"
//             />
//             <input
//               type="text"
//               {...register("password")}
//               placeholder="password"
//             />
//             <input
//               type="text"
//               {...register("mobile", { required: true, maxLength: 30 })}
//               placeholder="mobile number"
//             />
//             {errors.mobile?.type === "required" && "Mobile Number is required"}
//             {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
//             <Link to={"/home"} className="btn">Login</Link>
//             <Link to={"/register"} className="sign-up">you dont have account ? <br /> <span className="span">sign up now</span></Link>
//           </form>
//         </div>
//         <div className="col-2">
//           <img src={bgImg} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Login;