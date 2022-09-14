import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./stakeCard.module.css";
import Card from "../card/card";
import AccountDetailsGrid from "./accountDetailsGrid/accountDetailsGrid";
import { notificationActions } from "../../store/notification/notification";
import Loader from "../loader/loader";

import {
  handleStake,
  handleGroundHogBalance,
  handleStakingApproval,
  handleGroundHogStakedBalance,
  checkApproved,
} from "./stakeHelpers";

const StakeCard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { message, constractAction } = useSelector(
    (state) => state.notification
  );

  const [approved, setApproved] = useState(false);
  const [availableHog, setAvailableHog] = useState(0);
  const [stakedHog, setStakedHog] = useState(0);

  const { connected, address } = useSelector(
    (state) => state.connection.connectionState
  );
  const accountData = [
    { name: "GoundHog Balance", value: availableHog.length },
    { name: "USDC Balance", value: 5000 },
    { name: "Total Staked", value: stakedHog.length },
    { name: "Total USDC Claimed", value: 400 },
  ];

  useEffect(() => {
    checkApproved(address, setApproved);
    handleGroundHogBalance(address, setAvailableHog);
    handleGroundHogStakedBalance(address, setStakedHog);
  }, [constractAction, address]);

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
    <div className={styles.stakeCard}>
      <Card>
        <div className={styles.cardContainer}>
          {accountData.map((item) => {
            return <AccountDetailsGrid key={item.name} data={item} />;
          })}
        </div>
      </Card>
      <button
        disabled={loading}
        onClick={
          !approved
            ? () => {
                handleStakingApproval(dispatch, setLoading, setApproved);
              }
            : () => {
                handleStake(dispatch, availableHog, setLoading);
              }
        }
      >
        {loading ? (
          <Loader />
        ) : !connected ? (
          "Connect Wallet"
        ) : approved ? (
          "Stake"
        ) : (
          "Approve"
        )}
      </button>
      <p>One NFT is staked per transaction</p>
    </div>
  );
};

export default StakeCard;
