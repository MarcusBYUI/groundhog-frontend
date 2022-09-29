import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AppPagination from "../../../../components/pagination/pagination";
import { apiRequest } from "../../../../helpers/connections";

import styles from "./paymentDue.module.css";

const PaymentDue = () => {
  const authState = useSelector((state) => state.auth);

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiRequest(
        "user/users",
        undefined,
        undefined,
        authState.loggedIn
      );
      setFetchedData(data);
    };
    getData();
  }, [authState.loggedIn]);
  const [userData, setUserData] = useState([]);

  return (
    <>
      <div className={styles.userContainer}>
        <div>
          <div className={styles.Header}>
            <p>Address</p>
            <p>Amount(USDC)</p>
            <p>Action</p>
          </div>
          <hr />
        </div>
        {userData &&
          userData.map((item, index) => {
            if (item.pendingPaid > 0)
              return (
                <div key={item.id + index}>
                  <div className={styles.Row}>
                    <span>{item.address}</span>
                    <span>{item.pendingPaid}</span>
                    <img
                      src={require("../../../../assets/paid.png")}
                      alt="delete"
                    />
                  </div>
                  <hr />
                </div>
              );
            else return <></>;
          })}
      </div>
      <div className={styles.paginationContainer}>
        <AppPagination callback={setUserData} rawData={fetchedData} />
      </div>
    </>
  );
};

export default PaymentDue;
