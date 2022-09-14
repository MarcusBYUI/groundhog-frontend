import React from "react";
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import Web3Modal from "web3modal";

import { connectionActions } from "../../store/connection/connection";
import { providerOptions } from "./providerOptions";

import styles from "./connectButton.module.css";
import Message from "../message/message";
const ConnectButton = () => {
  //const currentChainId = 56;
  const dispatch = useDispatch();

  const { pushMessage } = useSelector((state) => state.notification);

  const { connected, address } = useSelector(
    (state) => state.connection.connectionState
  );

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const makeConnection = async () => {
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const accounts = await library.listAccounts();
    //const network = await library.getNetwork();
    // setProvider(provider);
    // setLibrary(library);
    // /if (accounts) setAccount(accounts[0]);
    //setChainId(network.chainId);

    //set connection state
    dispatch(
      connectionActions.setConnection({ connected: true, address: accounts[0] })
    );
  };

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
    <>
      {!!pushMessage ? <Message message={pushMessage} /> : ""}

      <div className={styles.buttonContainer}>
        <button onClick={connectButtonHandler}>
          {!connected
            ? "Connect Wallet"
            : `${address.substr(0, 5)}...${address.substr(36)}`}
        </button>
      </div>
    </>
  );
};

export default ConnectButton;
