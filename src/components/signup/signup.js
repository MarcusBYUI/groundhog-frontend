import React, { useEffect } from "react";
import OverLay from "../overLay/overLay";

import styles from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";

const Signup = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.notification);

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.SetSignupPop(false));
  };

  const handleLoginUpPop = () => {
    dispatch(authSliceActions.SetSignupPop(false));
    dispatch(authSliceActions.setLoginPop(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(notificationActions.setPushMessage(message));

    const timeout = setTimeout(() => {
      dispatch(notificationActions.setMessage(""));
    }, 4500);

    return () => {
      clearTimeout(timeout);
    };
  }, [message, dispatch]);

  return (
    <>
      <OverLay closeHandler={handleBackdropCLick} />
      <div className={styles.loginPop}>
        <i onClick={handleBackdropCLick} className="fa-solid fa-xmark"></i>
        <h2>GroundHog SignUp</h2>
        <p>
          Create an account to gain minting and <br /> staking access
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" placeholder="John Doe" required />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="example@gmail.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="##########" required />
          </label>

          <label>
            Phone
            <input type="tel" placeholder="+1 ### ### ####" required />
          </label>
          <label>
            Home Address
            <input
              type="text"
              placeholder="000 Hog Camp Road Oak Lawn, IL 00000"
              required
            />
          </label>
          <input className={styles.formButton} type="submit" value="SignUp" />
        </form>

        <div>
          <span>Already have an account?</span>
          <p onClick={handleLoginUpPop}>Login</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
