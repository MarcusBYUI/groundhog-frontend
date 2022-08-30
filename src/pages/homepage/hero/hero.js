import React from "react";
import SectionWidth from "../../../components/sectionWidth/sectionWidth";

import styles from "./hero.module.css";
const Hero = () => {
  return (
    <section>
      <SectionWidth>
        <div className={styles.heroGrid}>
          <div className={styles.heroTexts}>
            <h1>GroundHog Mining</h1>
            <p>
              Mint GroundHog NFTs Mint GroundHog NFTs Mint GroundHog NFTsMint
              GroundHog NFTsMint GroundHog NFTsMint GroundHog NFTs
            </p>
            <div className={styles.detailGrid}></div>
            <div className={styles.buttonGrid}></div>
          </div>
          <div className={styles.heroImage}></div>
          <div></div>
        </div>
      </SectionWidth>
    </section>
  );
};

export default Hero;
