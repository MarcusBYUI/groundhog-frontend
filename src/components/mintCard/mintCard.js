import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ethers } from "ethers";

import styles from "./mintCard.module.css";
import Loader from "../loader/loader";
import Message from "../message/message";
import { notificationActions } from "../../store/notification/notification";

const MintCard = ({ data }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { connected } = useSelector(
    (state) => state.connection.connectionState
  );

  const { message } = useSelector((state) => state.notification);

  const HandleMint = async (fee) => {
    if (window.ethereum) {
      setLoading(true);

      const valueFee = {
        value: ethers.utils.parseEther(`${fee}`),
        gasLimit: 800000,
      };
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      //const contract = new ethers.Contract(mintContract, mintABI, signer);

      try {
        //const response = await contract.mintCard(league, valueFee);
        //await response.wait();

        //send address to api to confirm, set timeout
        dispatch(
          notificationActions.setMessage(
            "Membership card was minted succesfully, you will receive complete league momentarily"
          )
        );

        setLoading(false);
      } catch (error) {
        setLoading(false);
        dispatch(notificationActions.setMessage(error.message));
      }
    }
  };

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
        <button
          onClick={() => {
            HandleMint(data.cost);
          }}
          disabled={loading}
        >
          {loading ? <Loader /> : connected ? "Mint" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default MintCard;
