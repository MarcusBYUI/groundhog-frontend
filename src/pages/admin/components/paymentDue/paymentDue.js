import React, { useState, useMemo } from "react";
import AppPagination from "../../../../components/pagination/pagination";

import styles from "./paymentDue.module.css";

const PaymentDue = () => {
  const rawData = useMemo(
    () => [
      {
        id: 1,
        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 2,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 4000,
        staked: "August 13, 2022",
      },
      {
        id: 3,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 4,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 5,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 6,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 7,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 8,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 9,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 10,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 11,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 12,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 13,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 14,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 15,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 16,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 17,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 18,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 19,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 20,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 21,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
      {
        id: 22,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        amount: 400,
        staked: "August 13, 2022",
      },
    ],
    []
  );
  const [userData, setUserData] = useState(null);
  return (
    <div className={styles.userContainer}>
      <div>
        <div className={styles.Header}>
          <p>Address</p>
          <p>Amount</p>
          <p>Unlock Date</p>
        </div>
        <hr />
      </div>
      {userData &&
        userData.map((item, index) => {
          return (
            <div key={item.id + index}>
              <div className={styles.Row}>
                <span>{item.address}</span>
                <span>{item.amount}</span>
                <span>{item.staked}</span>
              </div>
              <hr />
            </div>
          );
        })}
      <AppPagination callback={setUserData} rawData={rawData} />
    </div>
  );
};

export default PaymentDue;
