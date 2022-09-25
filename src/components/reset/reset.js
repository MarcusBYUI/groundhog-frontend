import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import OverLay from "../overLay/overLay";
import styles from "./reset.module.css";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";
import Loader from "../loader/loader";
import { formHandler, passwordReset } from "./helper";

const Reset = () => {
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  //state that manages that verification was sent
  const [resent, setResent] = useState(false);

  const { message } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.setResetPop(false));
  };

  const handleSignUpPop = () => {
    dispatch(authSliceActions.setResetPop(false));
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
        <h2>GroundHog Reset</h2>
        <p>Reset your password to gain log in access</p>
        {codeSent ? (
          <form
            onSubmit={(e) => {
              passwordReset(e, setLoading, dispatch, setResent);
            }}
            className={styles.resend}
          >
            <label>
              Verification Code
              <input
                name="token"
                type="text"
                placeholder="#########"
                required
              />
            </label>

            <label>
              New Password
              <input
                name="password"
                type="password"
                placeholder="##########"
                required
              />
            </label>

            <button disabled={loading} className={styles.formButton}>
              {loading ? <Loader /> : " Change Password"}
            </button>
          </form>
        ) : (
          <form
            className={styles.form}
            onSubmit={(e) => {
              formHandler(e, setLoading, dispatch, setResent, setCodeSent);
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
            {resent && <span>You can resend again after 30mins</span>}

            <button disabled={loading} className={styles.formButton}>
              {loading ? <Loader /> : " Send Code"}
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

export default Reset;
