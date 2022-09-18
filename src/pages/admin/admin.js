import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./admin.module.css";
import SectionWidth from "../../components/sectionWidth/sectionWidth";
import Card from "../../components/card/card";
import ConnectButton from "../../components/connectButton/connectButton";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Users from "./components/users/users";
import PaymentDue from "./components/paymentDue/paymentDue";
import MultiSender from "./components/multiSender/multiSender";
import PaymentsHistory from "./components/paymentsHistory/paymentsHistory";
import Nfts from "./components/nfts/nfts";
import { authSliceActions } from "../../store/auth/auth";
import AddNFT from "./components/nfts/addNFT/addNFT";

const Admin = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleAddNFTPop = () => {
    dispatch(authSliceActions.SetAdminPop(true));
  };
  return (
    <>
      <Card>
        <Header />
      </Card>
      <ConnectButton />
      <SectionWidth>
        <section className={styles.nftSection}>
          <button onClick={handleAddNFTPop}>Add NFT</button>
          <h3>NFTs</h3>

          <Card>
            <Nfts />
          </Card>
        </section>
        <section className={styles.usersSection}>
          <h3>Users</h3>

          <Card>
            <Users />
          </Card>
        </section>
        <section className={styles.duePaymentSection}>
          <h3>Payment Due</h3>

          <Card>
            <PaymentDue />
          </Card>
        </section>
        <section className={styles.senderSection}>
          <h3>Sender</h3>
          <p>
            Each transaction is separated by a comma and the address should be
            separated from the amount with a colon; Transactions happens in
            batches of 50 transaction, so if you have over 50 transaction, your
            wallet would prompt you to approve another batch.
          </p>
          <Card>
            <MultiSender />
          </Card>
        </section>
        <section className={styles.paymentsSection}>
          <h3>Payments</h3>

          <Card>
            <PaymentsHistory />
          </Card>
        </section>
      </SectionWidth>
      <Card>
        <Footer />
      </Card>
      {authState.adminPop && <AddNFT />}
    </>
  );
};

export default Admin;
