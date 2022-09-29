import React, { useState, useEffect } from "react";
import AppPagination from "../../../../components/pagination/pagination";

import styles from "./users.module.css";
import { apiRequest } from "../../../../helpers/connections";
import { useSelector } from "react-redux";

const Users = () => {
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
  const [userData, setUserData] = useState(null);
  return (
    <div className={styles.userContainer}>
      <div>
        <div className={styles.Header}>
          <p>Address</p>
          <p>Name</p>
          <p>Email</p>
          <p>Home</p>
          <p>Phone</p>
          <p>Action</p>
        </div>
        <hr />
      </div>
      {userData &&
        userData.map((item, index) => {
          if (item.level === "user")
            return (
              <div key={item.id + index}>
                <div className={styles.Row}>
                  <span>{item.address}</span>
                  <span>{item.fullname}</span>
                  <span>{item.email}</span>
                  <span>{item.haddress}</span>
                  <span>{item.phone}</span>
                  <img
                    src={require("../../../../assets/delete.png")}
                    alt="delete"
                  />
                </div>
                <hr />
              </div>
            );
          else return <></>;
        })}
      <AppPagination callback={setUserData} rawData={fetchedData} />
    </div>
  );
};

export default Users;
