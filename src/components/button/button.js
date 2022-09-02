import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./button.module.css";

const Button = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (data.action) {
      case "mint":
        //check login state
        navigate("/mint");
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
