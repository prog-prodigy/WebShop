import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faCartShopping,
  faEye,
  faEyeLowVision,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import "./form.css";
import image from "../../images/SHOPPING.png";
import {createUserWithEmailAndPassword} from '@firebase/auth'
import { authfirebase } from "../../firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Register = (props) => {
  const email = useRef();
  const password = useRef();
  const [pstate, setPstate] = React.useState(true);
  const dispatch= useDispatch()
  const reg = async (e) => {
    e.preventDefault()

        try{
          const user= await createUserWithEmailAndPassword(authfirebase, email.current.value, password.current.value)
          console.log('done')
          dispatch(authActions.login())
        }catch(err){
          console.log(err.message)
        }
  };

  return (
    <form onSubmit={reg}>
      <div className="form-container">
        <div className="Intro">
          <div className="intro-text">
            <h1>
      Join
              <FontAwesomeIcon icon={faCartShopping} />
              FakeCart
            </h1>
            <p>The One-stop Shopping Destination</p>
          </div>
          <img src={image} alt="Shopping" />
        </div>
        <div className="form-box">
          <h1 className="form-title">Sign up</h1>
          <div className="email">
            <label htmlFor="lemail">Email</label>
            <input
              id="lemail"
              type="email"
              placeholder="Type your email"
              className="lemail"
              ref={email}
            />
            <FontAwesomeIcon icon={faEnvelope} className="eicon" />
          </div>
          <div className="pass">
            <label htmlFor="lpass">Password</label>
            <input
              type={pstate ? "password" : "text"}
              placeholder="Type your password"
              className="lpass"
              ref={password}
            />
            <FontAwesomeIcon
              icon={!pstate ? faEye : faEyeLowVision}
              className="passState-icon"
              onClick={() => setPstate((prev) => !prev)}
            />
            <FontAwesomeIcon icon={faLock} className="picon" />
          </div>
          <button className="btn-grad"> Register</button>
          <p>Have an account? <span onClick={props.changeForm}>Sign in</span></p>
        </div>
      </div>
    </form>
  );
};

export default Register;
