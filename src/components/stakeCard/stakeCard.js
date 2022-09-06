import React from "react";
import { useSelector } from "react-redux";

import styles from "./stakeCard.module.css";
import Card from "../card/card";
import AccountDetailsGrid from "./accountDetailsGrid/accountDetailsGrid";

const StakeCard = () => {
  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );
  const accountData = [
    { name: "GoundHog Balance", value: 0 },
    { name: "USDC Balance", value: 5000 },
    { name: "Total Staked", value: 3 },
    { name: "Total USDC Claimed", value: 400 },
  ];
  return (
    <div className={styles.stakeCard}>
      <Card>
        <div className={styles.cardContainer}>
          {accountData.map((item) => {
            return <AccountDetailsGrid key={item.name} data={item} />;
          })}
        </div>
      </Card>
      <button>{connected ? "Stake" : "Connect Wallet"}</button>
      <p>One NFT is staked per transaction</p>
    </div>
  );
};

export default StakeCard;
