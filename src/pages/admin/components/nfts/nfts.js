import React, { useState, useMemo } from "react";
import AppPagination from "../../../../components/pagination/pagination";

import styles from "./nfts.module.css";

const Nfts = () => {
  const rawData = useMemo(
    () => [
      {
        id: 1,
        name: "Tera Hog",
        cost: 200,
        percentage: 6,
      },
      {
        id: 2,

        name: "Shy Hog",
        cost: 400,
        percentage: "3",
      },
    ],
    []
  );
  const [userData, setUserData] = useState(null);
  return (
    <div className={styles.userContainer}>
      <div>
        <div className={styles.Header}>
          <p>Name</p>
          <p>Cost</p>
          <p>Percentage</p>
          <p>Action</p>
        </div>
        <hr />
      </div>
      {userData &&
        userData.map((item, index) => {
          return (
            <div key={item.id + index}>
              <div className={styles.Row}>
                <span>{item.name}</span>
                <span>{item.cost}</span>
                <span>{item.percentage}%</span>
                <img
                  src={require("../../../../assets/delete.png")}
                  alt="delete"
                />
              </div>
              <hr />
            </div>
          );
        })}
      <AppPagination callback={setUserData} rawData={rawData} />
    </div>
  );
};

export default Nfts;
