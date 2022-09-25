import React, { useEffect } from "react";
import SectionWidth from "../sectionWidth/sectionWidth";
import { NavLink, Link } from "react-router-dom";

import styles from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../store/auth/auth";
import { apiRequest } from "../../helpers/connections";
import { notificationActions } from "../../store/notification/notification";
const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.notification);

  const handleLogin = () => {
    dispatch(authSliceActions.setLoginPop(true));
  };

  const handleLogOut = async () => {
    await apiRequest("auth/logout");
    const auth = {};
    auth.state = false;
    auth.token = "";
    auth.user = {};
    dispatch(notificationActions.setMessage("LogOut Successful"));

    dispatch(authSliceActions.setLoggedIn(auth));
  };

  const afterAuth = (
    <nav>
      <div>
        <ul>
          <li>
            {" "}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#cf754a" : "",
              })}
              to="/mint"
            >
              Mint
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#cf754a" : "",
              })}
              to="/stake"
            >
              Stake
            </NavLink>
          </li>
        </ul>
      </div>
      <span onClick={handleLogOut}>LogOut</span>
    </nav>
  );

  const beforeAuth = (
    <nav>
      <div>
        <ul>
          <li>
            <span onClick={handleLogin}>Mint</span>
          </li>
          <li>
            <span onClick={handleLogin}>Stake</span>
          </li>
        </ul>
      </div>
      <span onClick={handleLogin}>Account</span>
    </nav>
  );

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
    <header>
      <SectionWidth>
        <div className={styles.headerGrid}>
          <div className={styles.logoImage}>
            <Link to="/">
              <img src={require("../../assets/logo.png")} alt="logo" />
            </Link>
          </div>
          {authState.loggedIn.state ? afterAuth : beforeAuth}
        </div>
      </SectionWidth>
    </header>
  );
};

export default Header;
