import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authSliceActions } from "../../store/auth/auth";
import styles from "./button.module.css";

const Button = ({ data }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // /stake
  const handleClick = () => {
    switch (data.action) {
      case "mint":
        authState.loggedIn.state
          ? navigate("/mint")
          : dispatch(authSliceActions.setLoginPop(true));

        break;
      case "stake":
        authState.loggedIn.state
          ? navigate("/stake")
          : dispatch(authSliceActions.setLoginPop(true));

        break;

      default:
        break;
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${styles[data.style]}`}
    >
      {data.name}
    </button>
  );
};

export default Button;
