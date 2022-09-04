import React from "react";

import styles from "./overLay.module.css";
const OverLay = ({ closeHandler }) => {
  return <div onClick={closeHandler} className={styles.backdrop}></div>;
};

export default OverLay;
