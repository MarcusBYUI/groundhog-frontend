import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import OverLay from "../overLay/overLay";
import styles from "./login.module.css";
import { authSliceActions } from "../../store/auth/auth";
import Loader from "../loader/loader";
import { formHandler, resendVer } from "./helper";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [resendVerification, setResendVerification] = useState(false);
  const [email, setEmail] = useState("");
  //state that manages that verification was sent
  const [resent, setResent] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.setLoginPop(false));
  };

  const handleSignUpPop = () => {
    dispatch(authSliceActions.setLoginPop(false));
    dispatch(authSliceActions.SetSignupPop(true));
  };

  const handleReset = () => {
    dispatch(authSliceActions.setResetPop(true));
    dispatch(authSliceActions.setLoginPop(false));
  };

  return (
    <>
      <OverLay closeHandler={handleBackdropCLick} />
      <div className={styles.loginPop}>
        <i onClick={handleBackdropCLick} className="fa-solid fa-xmark"></i>
        <h2>GroundHog Login</h2>
        <p>Login to gain minting and staking access</p>
        {resendVerification ? (
          <div className={styles.resend}>
            <h3>You account is not verified</h3>
            <p>Do you want to resend verification email?</p>
            <button
              onClick={() => {
                !resent && resendVer(setLoading, email, dispatch, setResent);
              }}
              disabled={loading}
              className={styles.formButton}
            >
              {loading ? <Loader /> : " Yes"}
            </button>
            {resent && <span>You can resend again after 30mins</span>}
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={(e) => {
              formHandler(
                e,
                setLoading,
                dispatch,
                setResendVerification,
                setEmail,
                navigate
              );
            }}
          >
            <label>
              Email Address
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="##########"
                required
              />
            </label>
            <span onClick={handleReset}>Forgot password? click here</span>

            <button disabled={loading} className={styles.formButton}>
              {loading ? <Loader /> : " login"}
            </button>
          </form>
        )}

        <div>
          <span>Don’t have an account?</span>
          <p onClick={handleSignUpPop}>SignUp</p>
        </div>
      </div>
    </>
  );
};

export default Login;
