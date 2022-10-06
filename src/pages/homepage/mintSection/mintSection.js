import React from "react";

import Button from "../../../components/button/button";
import ListItems from "../../../components/listItems/listItems";
import SectionWidth from "../../../components/sectionWidth/sectionWidth";
import styles from "./mintSection.module.css";
const MintSection = () => {
  return (
    <section className={styles.mintSection}>
      <SectionWidth>
        <div className={styles.MintSectionGrid}>
          <div className={styles.wheelingImage}></div>
          <div className={styles.mintSectionText}>
            <div className={styles.mintHeaderGrid}>
              <p>Gopher Mines </p>
              <p>NFT</p>
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
              <ListItems text="Mint GroundHog NFTs GroundHog N" />
            </ul>
            <div className={styles.buttonContainer}>
              <Button
                data={{ name: "Mint Now", action: "mint", style: "white" }}
              />
            </div>
          </div>
        </div>
      </SectionWidth>
    </section>
  );
};

export default MintSection;
