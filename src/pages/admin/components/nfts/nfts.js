import React, { useState, useEffect } from "react";
import AppPagination from "../../../../components/pagination/pagination";

import styles from "./nfts.module.css";
import { apiRequest } from "../../../../helpers/connections";
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../../../store/notification/notification";

const Nfts = () => {
  const [rawData, setrawData] = useState([]);
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const getNFTs = async () => {
    const result = await apiRequest("collection");
    setrawData(result);
  };

  const deleteNFT = async (id) => {
    const result = await apiRequest(`collection/delete/${id}`);

    if (result.status === 200) {
      dispatch(notificationActions.setMessage("Delete Successful"));
      getNFTs();
    } else {
      dispatch(notificationActions.setMessage(result.message));
    }
  };

  useEffect(() => {
    getNFTs();
  }, [authState.adminPop]);
  const [userData, setUserData] = useState(null);
  return (
    <>
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
          userData.map((item) => {
            return (
              <div key={item._id}>
                <div className={styles.Row}>
                  <span>{item.nftName}</span>
                  <span>{item.cost}</span>
                  <span>{item.percentage * 12}%</span>
                  <img
                    onClick={() => {
                      deleteNFT(item._id);
                    }}
                    src={require("../../../../assets/delete.png")}
                    alt="delete"
                  />
                </div>
                <hr />
              </div>
            );
          })}
      </div>
      <div className={styles.paginationContainer}>
        <AppPagination callback={setUserData} rawData={rawData} />
      </div>
    </>
  );
};

export default Nfts;
