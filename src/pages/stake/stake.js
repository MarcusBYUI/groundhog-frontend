import React from "react";

import Card from "../../components/card/card";
import ConnectButton from "../../components/connectButton/connectButton";
import Header from "../../components/header/header";
import SectionWidth from "../../components/sectionWidth/sectionWidth";
import Footer from "../../components/footer/footer";
import styles from "./stake.module.css";
import StakeCard from "../../components/stakeCard/stakeCard";

const Stake = () => {
  return (
    <>
      <Card>
        <Header />
      </Card>
      <ConnectButton />
      <SectionWidth>
        <section className={styles.stakeSection}>
          <h3>STAKE</h3>

          <Card>
            <div className={styles.stakeGrid}>
              <StakeCard />
              <img src={require("../../assets/mine.png")} alt="mine" />
            </div>
          </Card>
        </section>
      </SectionWidth>
      <Card>
        <Footer />
      </Card>
    </>
  );
};

export default Stake;
