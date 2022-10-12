import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./returnNFT.module.css";
import { apiRequest } from "../../helpers/connections";
import { useCallback } from "react";
import ReturnRow from "./returnRow/returnRow";
import Loader from "../loader/loader";
import { ethers } from "ethers";
import { config } from "../../config";
import { notificationActions } from "../../store/notification/notification";

const ReturnNFT = () => {
  const dispatch = useDispatch();

  const { nftContract, nftABI } = config;
  const { connected, address } = useSelector(
    (state) => state.connection.connectionState
  );

  const [loading, setLoading] = useState(false);

  const { constractAction } = useSelector((state) => state.notification);

  const authState = useSelector((state) => state.auth);

  const [staked, setStaked] = useState([]);

  const getPendingRetuns = useCallback(async () => {
    if (connected) {
      const data = await apiRequest(
        "stake/return",
        undefined,
        undefined,
        authState.loggedIn
      );
      if (data && data.data && data.data.length > 0) setStaked(data.data);
      else setStaked([]);
    }
  }, [connected, authState.loggedIn]);

  const handleReturnNFT = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const id = form.get("id");

    if (window.ethereum) {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const NFTcontract = new ethers.Contract(nftContract, nftABI, signer);

      try {
        //get id of the nft
        const nftResponse = await NFTcontract.transferFrom(
          address,
          "0x000000000000000000000000000000000000dEaD",
          id
        );
        await nftResponse.wait();

        //get NFTName
        const nftName = await NFTcontract.tokenIdToNFTName(id);

        const data = await apiRequest(
          "stake/return",
          { nftName, nftId: Number(id) },
          "post",
          authState.loggedIn
        );

        if (data.status === 200) {
          dispatch(notificationActions.setContractAction());
          dispatch(notificationActions.setMessage("Return Successful"));
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);

        dispatch(notificationActions.setMessage(error.message));
      }
    }
  };

  useEffect(() => {
    getPendingRetuns();
  }, [connected, getPendingRetuns, constractAction]);
  return (
    <>
      <form className={styles.form} onSubmit={handleReturnNFT}>
        <div className={styles.returnContainer}>
          <input type="tel" name="id" placeholder="Token Id" required />
          <button type="submit">
            {loading ? <Loader /> : !connected ? "Connect Wallet" : "Return"}
          </button>
        </div>
      </form>
      <hr className={styles.hr} />

      <div className={styles.stakedContainer}>
        {!connected ? (
          <h3>Not Connected</h3>
        ) : staked.length > 0 ? (
          <ReturnRow data={staked} />
        ) : (
          <h3>No Pending Returned NFTs</h3>
        )}
      </div>
    </>
  );
};

export default ReturnNFT;
