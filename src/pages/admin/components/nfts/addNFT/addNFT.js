import React from "react";
import { useDispatch } from "react-redux";

import OverLay from "../../../../../components/overLay/overLay";
import { authSliceActions } from "../../../../../store/auth/auth";
import styles from "./addNFT.module.css";

const AddNFT = () => {
  const dispatch = useDispatch();

  const handleBackdropCLick = () => {
    dispatch(authSliceActions.SetAdminPop(false));
  };

  return (
    <>
      <OverLay closeHandler={handleBackdropCLick} />
      <div className={styles.loginPop}>
        <i onClick={handleBackdropCLick} className="fa-solid fa-xmark"></i>
        <h2>Add NFT</h2>

        <form>
          <label>
            NFT Name
            <input type="text" placeholder="Test Name" required />
          </label>
          <label>
            Image Url
            <input type="text" placeholder="https://mynftimage.jpg" required />
          </label>
          <label>
            Cost
            <input type="tel" placeholder="Cost" required />
          </label>
          <label>
            Percentage
            <input type="tel" placeholder="6" required />
          </label>

          <input className={styles.formButton} type="submit" value="Add NFT" />
          <input
            className={styles.formButton}
            type="submit"
            value="Update NFT Contract"
          />
          <input
            className={styles.formButton}
            type="submit"
            value="Update Staking Contract"
          />
        </form>
      </div>
    </>
  );
};

export default AddNFT;
