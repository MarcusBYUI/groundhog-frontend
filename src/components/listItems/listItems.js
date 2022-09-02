import React from "react";

import styles from "./listItems.module.css";

const ListItems = ({ text }) => {
  return (
    <li className={styles.listItems}>
      <img src={require("../../assets/dot.png")} alt="dot" />
      <p>{text}</p>
    </li>
  );
};

export default ListItems;
