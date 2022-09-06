import React from "react";

import styles from "./mint.module.css";
import ConnectButton from "../../components/connectButton/connectButton";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import SectionWidth from "../../components/sectionWidth/sectionWidth";
import MintCard from "../../components/mintCard/mintCard";
import Footer from "../../components/footer/footer";

const Mint = () => {
  const NFTs = [
    {
      id: 1,
      name: "Terra Hog",
      cost: 200,
      symbol: "terra",
      image: "http://localhost:3000/art/barrel.gif",
    },
    {
      id: 2,
      name: "Shy Hog",
      cost: 600,
      symbol: "shy",
      image: "http://localhost:3000/art/logo.gif",
    },
  ];

  return (
    <>
      <Card>
        <Header />
      </Card>
      <ConnectButton />
      <SectionWidth>
        <section className={styles.mintSection}>
          <h3>MINT</h3>

          <Card>
            <div className={styles.MintGrid}>
              {NFTs.map((nft) => {
                return <MintCard key={nft.id} data={nft} />;
              })}
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

export default Mint;