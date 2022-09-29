import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../../../components/loader/loader";
import styles from "./multiSender.module.css";
import {
  handleMultisending,
  checkApproved,
  handleMultisendingApproval,
} from "./multisenderHelper";

const MultiSender = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.notification);
  const { connected, address } = useSelector(
    (state) => state.connection.connectionState
  );
  const [approved, setApproved] = useState(false);

  const onSubmission = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    let details = data.get("multisend").trim().replaceAll("\n", "").split(",");

    details = details.filter(Boolean);

    connected && approved && handleMultisending(dispatch, details, setLoading);
    connected &&
      !approved &&
      handleMultisendingApproval(dispatch, setLoading, setApproved);
  };

  useEffect(() => {
    checkApproved(address, setApproved);
  }, [address, message]);

  return (
    <form onSubmit={onSubmission} className={styles.multiSenderForm}>
      <textarea
        cols="30"
        rows="10"
        name="multisend"
        placeholder="0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500,
0x921ede05BCCe447fC79E3175ff4bD220Eef144C9: 500
        "
        required
      ></textarea>
      <button disabled={loading}>
        {loading ? (
          <Loader />
        ) : !connected ? (
          "Connect Wallet"
        ) : approved ? (
          "Send Payment"
        ) : (
          "Approve"
        )}
      </button>
    </form>
  );
};

export default MultiSender;
