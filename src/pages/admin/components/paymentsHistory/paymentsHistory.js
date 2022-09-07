import React, { useRef } from "react";

import styles from "./paymentsHistory.module.css";

const PaymentsHistory = () => {
  const fromRef = useRef(null);
  const toRef = useRef(null);
  return (
    <div className={styles.paymentsGrid}>
      <label>
        From
        <input ref={fromRef} type="date" required />
      </label>
      <label>
        To
        <input ref={toRef} type="date" required />
      </label>
      <button className={styles.paymentsButton}>Get Payments</button>
    </div>
  );
};

export default PaymentsHistory;
