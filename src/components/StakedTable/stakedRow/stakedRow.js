import React from "react";
import CountdownTimer from "../../countdownTimer/countdownTimer";

import styles from "./stakedRow.module.css";

const StakedRow = ({ data }) => {
  return (
    <>
      <>
        <div className={styles.stakedHeader}>
          <p>Stake date</p>
          <p>Total Paid</p>
          <p>Next Payment in</p>
          <p>Unlock Date</p>
          <p>Action</p>
        </div>
        <hr />
      </>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.stakedRow}>
              <span>{item.staked}</span>
              <span>{item.paid} USDC</span>
              <CountdownTimer time={item.next} />
              <CountdownTimer time={item.unlock} />
              <button>Unstake</button>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default StakedRow;
