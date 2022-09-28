import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../../store/notification/notification";
import CountdownTimer from "../../countdownTimer/countdownTimer";
import Loader from "../../loader/loader";

import styles from "./stakedRow.module.css";
import { handleUnStake } from "../../stakeCard/stakeHelpers";

const StakedRow = ({ data }) => {
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

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.notification);

  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );

  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(notificationActions.setPushMessage(message));

    const timeout = setTimeout(() => {
      dispatch(notificationActions.setMessage(""));
    }, 4500);

    return () => {
      clearTimeout(timeout);
    };
  }, [message, dispatch]);

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
        const disabled = item.unlock > new Date().getTime();
        const d = new Date(item.date);
        const date = `${
          months[d.getMonth()]
        } ${d.getDate()}, ${d.getFullYear()}`;
        return (
          <div key={item._id}>
            <div className={styles.stakedRow}>
              <span>{date}</span>
              <span>{item.totalPaid} USDC</span>
              <CountdownTimer time={item.next} />
              <CountdownTimer time={item.unlock} />
              <button
                onClick={() =>
                  handleUnStake(
                    setLoading,
                    item.stakeId,
                    authState.loggedIn,
                    dispatch
                  )
                }
                disabled={disabled && loading}
              >
                {loading ? (
                  <Loader />
                ) : !connected ? (
                  "Connect Wallet"
                ) : (
                  "Unstake"
                )}
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default StakedRow;
