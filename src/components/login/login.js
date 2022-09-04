import React from "react";
import OverLay from "../overLay/overLay";

import styles from "./login.module.css";

const Login = () => {
  const handleBackdropCLick = () => {};
  return (
    <>
      <OverLay />
      <div className={styles.loginPop}>
        <i onClick={handleBackdropCLick} className="fa-solid fa-xmark"></i>
        <h2>GroundHog Login</h2>
        <p>Login to gain minting and staking access</p>

        <form>
          <label>
            Email Address
            <input type="text" placeholder="example@gmail.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="##########" required />
          </label>
          <input className={styles.formButton} type="submit" value="Login" />
        </form>

        <div>
          <span>Don’t have an account?</span>
          <p>SignUp</p>
        </div>
      </div>
    </>
  );
};

export default Login;
