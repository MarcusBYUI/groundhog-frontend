import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./returnNFT.module.css";
import { apiRequest } from "../../../../helpers/connections";
import { useCallback } from "react";
import ReturnRow from "../../../../components/returnNFT/returnRow/returnRow";

const ReturnedNFTs = () => {
  const { constractAction } = useSelector((state) => state.notification);

  const authState = useSelector((state) => state.auth);

  const [staked, setStaked] = useState([]);

  const getPendingRetuns = useCallback(async () => {
    const data = await apiRequest(
      "stake/returns",
      undefined,
      undefined,
      authState.loggedIn
    );

    if (data && data.data && data.data.length > 0) setStaked(data.data);
    else {
      setStaked([]);
    }
  }, [authState.loggedIn]);

  useEffect(() => {
    getPendingRetuns();
  }, [getPendingRetuns, constractAction]);
  return (
    <>
      <div className={styles.stakedContainer}>
        {staked.length > 0 ? (
          <ReturnRow data={staked} />
        ) : (
          <h3>No Pending Returned NFTs</h3>
        )}
      </div>
    </>
  );
};

export default ReturnedNFTs;
