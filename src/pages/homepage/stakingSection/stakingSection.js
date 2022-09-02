import React from "react";

import Button from "../../../components/button/button";
import SectionWidth from "../../../components/sectionWidth/sectionWidth";
import ListItems from "../../../components/listItems/listItems";
import styles from "./stakingSection.module.css";

const StakingSection = () => {
  return (
    <section className={styles.stakingSection}>
      <SectionWidth>
        <div className={styles.stakingSectionGrid}>
          <div className={styles.stakingText}>
            <div className={styles.mintHeaderGrid}>
              <p>GroundHog </p>
              <p>STAKING</p>
            </div>
            <p>
              Mint GroundHog NFTs Mint GroundHog NFTs Mint GroundHog NFTsMint
              GroundHog NFTsMint GroundHog NFTsMint GroundHog NFTs sdvndjkv Mint
              GroundHog NFTs Mint GroundHog NFTs Mint GroundHog NFTsMint
              GroundHog NFTsMint GroundHog NFTsMint GroundHog NFTs sdvndjkv
            </p>
            <ul>
              <ListItems text="Mint GroundHog NFTs" />
              <ListItems text="Mint GroundHog NFTs Mint GroundHog NFTs Mint GroundHog " />
              <ListItems text="6% staking APY" />
            </ul>
            <div className={styles.buttonContainer}>
              <Button
                data={{ name: "Stake Now", action: "stake", style: "white" }}
              />
            </div>
          </div>
          <div className={styles.stakingimage}>
            <img src={require("../../../assets/GopherLogo.png")} alt="Gopher" />
          </div>
        </div>
      </SectionWidth>
    </section>
  );
};

export default StakingSection;
