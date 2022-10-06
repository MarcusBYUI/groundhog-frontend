import React, { useEffect, useState } from "react";
import OverLay from "../overLay/overLay";

import styles from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";
import Loader from "../loader/loader";
import { apiRequest } from "../../helpers/connections";

const Signup = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.notification);
  const [loading, setLoading] = useState(false);

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.SetSignupPop(false));
  };

  const handleLoginUpPop = () => {
    dispatch(authSliceActions.SetSignupPop(false));
    dispatch(authSliceActions.setLoginPop(true));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const body = {};
    for (const key of form.keys()) {
      body[key] = form.get(key);
    }
    const data = await apiRequest("auth/signup", body, "post");
    if (
      data.message ===
      "A verification email has been sent to " + body.email + "."
    ) {
      dispatch(authSliceActions.setLoginPop(true));
      dispatch(authSliceActions.SetSignupPop(false));
      setLoading(false);

      dispatch(notificationActions.setMessage(data.message));
    } else {
      setLoading(false);

      dispatch(notificationActions.setMessage(data.message));
    }
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
        <h2>Gopher Mines SignUp</h2>
        <p>
          Create an account to gain minting and <br /> staking access
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              name="fullname"
              type="text"
              placeholder="John Doe"
              required
            />
          </label>
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

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="+1 ### ### ####"
              required
            />
          </label>
          <label>
            Home Address
            <input
              type="text"
              name="haddress"
              placeholder="000 Hog Camp Road Oak Lawn, IL 00000"
              required
            />
          </label>
          <button disabled={loading} className={styles.formButton}>
            {loading ? <Loader /> : " SignUp"}
          </button>
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
