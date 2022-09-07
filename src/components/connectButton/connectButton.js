import React from "react";
//import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";

import { connectionActions } from "../../store/connection/connection";

import styles from "./connectButton.module.css";
const ConnectButton = () => {
  //const currentChainId = 56;
  const dispatch = useDispatch();

  const { connected, address } = useSelector(
    (state) => state.connection.connectionState
  );

  const makeConnection = async () => {};

  const connectButtonHandler = () => {
    if (connected && !!address) {
      ///disconnect
      dispatch(
        connectionActions.setConnection({ connected: false, address: "" })
      );
    } else {
      //connect
      makeConnection();
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={connectButtonHandler}>
        {!connected
          ? "Connect Wallet"
          : `${address.substr(0, 5)}...${address.substr(36)}`}
      </button>
    </div>
  );
};

export default ConnectButton;
