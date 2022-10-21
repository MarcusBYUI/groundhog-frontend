import React, { useState } from "react";
import CountdownTimer from "../../countdownTimer/countdownTimer";

import styles from "./returnRow.module.css";
import AppPagination from "../../pagination/pagination";

const ReturnRow = ({ data }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [userData, setUserData] = useState([]);

  return (
    <>
      <div className={styles.userContainer}>
        <>
          <div className={styles.stakedHeader}>
            <p>Return date</p>
            <p>Token</p>
            <p>Return Payment in</p>
            <p>Amount</p>
          </div>
          <hr />
        </>
        {userData.map((item) => {
          const d = new Date(item.date);
          const date = `${
            months[d.getMonth()]
          } ${d.getDate()}, ${d.getFullYear()}`;
          return (
            <div key={item._id}>
              <div className={styles.stakedRow}>
                <span>{date}</span>
                <span>{item.nftName}</span>
                <CountdownTimer time={item.paymentIn} payment={true} />
                <span>{item.amount}</span>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className={styles.paginationContainer}>
        <AppPagination callback={setUserData} rawData={data} />
      </div>
    </>
  );
};

export default ReturnRow;
