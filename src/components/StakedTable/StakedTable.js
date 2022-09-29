import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./StakedTable.module.css";
import StakedRow from "./stakedRow/stakedRow";
import { apiRequest } from "../../helpers/connections";
import { useCallback } from "react";

const StakedTable = () => {
  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );

  const { constractAction } = useSelector((state) => state.notification);

  const authState = useSelector((state) => state.auth);

  const [staked, setStaked] = useState([]);

  const handleStakedData = async (data) => {
    const newData = await new Promise((resolve, reject) => {
      const result = [];
      data.forEach((item, index) => {
        const newItem = { ...item };
        const stakedDate = new Date(item.date);
        const today = new Date();
        const monthLastDay = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        );
        const date = new Date();
        newItem["next"] = monthLastDay.getTime();

        const sixMonthDate = new Date(date.setMonth(stakedDate.getMonth() + 5));
        const unstakeDate = new Date(date.setDate(sixMonthDate.getDate() + 1));

        newItem["unlock"] = unstakeDate.getTime();

        result.push(newItem);

        result.length === index + 1 && resolve(result);
      });
    });
    setStaked(newData);
  };

  const getStaked = useCallback(async () => {
    if (connected) {
      const data = await apiRequest(
        "stake",
        undefined,
        undefined,
        authState.loggedIn
      );
      if (data && data.data && data.data.length > 0)
        await handleStakedData(data.data);
      else setStaked([]);
    }
  }, [connected, authState.loggedIn]);

  useEffect(() => {
    getStaked();
  }, [connected, getStaked, constractAction]);
  return (
    <div className={styles.stakedContainer}>
      {!connected ? (
        <h3>Not Connected</h3>
      ) : staked.length > 0 ? (
        <StakedRow data={staked} />
      ) : (
        <h3>No Staked NFTs</h3>
      )}
    </div>
  );
};

export default StakedTable;
