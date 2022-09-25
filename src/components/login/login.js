import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import OverLay from "../overLay/overLay";
import styles from "./login.module.css";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";
import Loader from "../loader/loader";
import { formHandler, resendVer } from "./helper";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [resendVerification, setResendVerification] = useState(false);
  const [email, setEmail] = useState("");
  //state that manages that verification was sent
  const [resent, setResent] = useState(false);

  const { message } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.setLoginPop(false));
  };

  const handleSignUpPop = () => {
    dispatch(authSliceActions.setLoginPop(false));
    dispatch(authSliceActions.SetSignupPop(true));
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
            onSubmit={(e) => {
              formHandler(
                e,
                setLoading,
                dispatch,
                setResendVerification,
                setEmail
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
