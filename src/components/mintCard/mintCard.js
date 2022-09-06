import React from "react";
import { useSelector } from "react-redux";

import styles from "./mintCard.module.css";

const MintCard = ({ data }) => {
  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );

  return (
    <div className={styles.mintCard}>
      <img src={data.image} alt={data.name} />
      <hr />
      <div>
        <div>
          <p>Name:</p>
          <span>{data.name}</span>
        </div>
        <div>
          <p>Cost:</p>
          <span>{data.cost} USDC</span>
        </div>
        <button>{connected ? "Mint" : "Connect Wallet"}</button>
      </div>
    </div>
  );
};

export default MintCard;
