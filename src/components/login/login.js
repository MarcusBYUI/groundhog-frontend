import React from "react";
import OverLay from "../overLay/overLay";

import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/auth/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.setLoginPop(false));
  };

  const handleSignUpPop = () => {
    dispatch(authSliceActions.setLoginPop(false));
    dispatch(authSliceActions.SetSignupPop(true));
  };
  return (
    <>
      <OverLay closeHandler={handleBackdropCLick} />
      <div className={styles.loginPop}>
        <i onClick={handleBackdropCLick} className="fa-solid fa-xmark"></i>
        <h2>GroundHog Login</h2>
        <p>Login to gain minting and staking access</p>

        <form>
          <label>
            Email Address
            <input type="email" placeholder="example@gmail.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="##########" required />
          </label>
          <input className={styles.formButton} type="submit" value="Login" />
        </form>

        <div>
          <span>Don’t have an account?</span>
          <p onClick={handleSignUpPop}>SignUp</p>
        </div>
      </div>
    </>
  );
};

export default Login;
