import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./StakedTable.module.css";
import StakedRow from "./stakedRow/stakedRow";

const StakedTable = () => {
  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );

  const [staked, setStaked] = useState([]);

  const handleStakedData = async (data) => {
    const newData = await new Promise((resolve, reject) => {
      const result = [];
      data.forEach((item, index) => {
        const newItem = { ...item };
        const stakedDate = new Date(item.staked);
        const today = new Date();
        const monthLastDay = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        );
        const date = new Date();
        newItem["next"] = monthLastDay.getTime();

        const sixMonthDate = new Date(date.setMonth(stakedDate.getMonth() + 5));

        newItem["unlock"] = sixMonthDate.getTime();

        result.push(newItem);

        result.length === index + 1 && resolve(result);
      });
    });

    setStaked(newData);
  };

  useEffect(() => {
    if (connected) {
      const stakedData = [
        {
          id: 0,
          staked: "August 13, 2022",
          paid: 300,
        },
        {
          id: 1,
          paid: 300,
          staked: "August 13, 2022",
        },
        {
          id: 2,
          paid: 300,
          staked: "August 13, 2022",
        },
        {
          id: 3,
          paid: 300,
          staked: "August 13, 2022",
        },
        {
          id: 4,
          paid: 300,
          staked: "August 13, 2022",
        },
        {
          id: 5,
          paid: 300,
          staked: "August 13, 2022",
        },
      ];
      handleStakedData(stakedData);
    }
  }, [connected]);
  return (
    <div className={styles.stakedContainer}>
      {connected ? <StakedRow data={staked} /> : <h3>Not Connected</h3>}
    </div>
  );
};

export default StakedTable;
