import React from "react";
import { useSelector } from "react-redux";

import styles from "./accountDetailsGrid.module.css";
import numberWithCommas from "../../../helpers/commaSeperator";

const AccountDetailsGrid = ({ data }) => {
  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );
  return (
    <div className={styles.accountDetailsGrid}>
      <p>{data.name}</p>
      <span>{connected ? numberWithCommas(data.value) : "Connect Wallet"}</span>
    </div>
  );
};

export default AccountDetailsGrid;
