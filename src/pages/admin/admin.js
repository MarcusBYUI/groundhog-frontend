import React from "react";

import styles from "./admin.module.css";
import SectionWidth from "../../components/sectionWidth/sectionWidth";
import Card from "../../components/card/card";
import ConnectButton from "../../components/connectButton/connectButton";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Users from "./components/users/users";
import PaymentDue from "./components/paymentDue/paymentDue";

const Admin = () => {
  return (
    <>
      <Card>
        <Header />
      </Card>
      <ConnectButton />
      <SectionWidth>
        <section className={styles.nftSection}>
          <h3>NFTs</h3>

          <Card></Card>
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

          <Card></Card>
        </section>
        <section className={styles.paymentsSection}>
          <h3>Payments</h3>

          <Card></Card>
        </section>
      </SectionWidth>
      <Card>
        <Footer />
      </Card>
    </>
  );
};

export default Admin;
