import React from "react";
import { useSelector } from "react-redux";

import styles from "./mint.module.css";
import ConnectButton from "../../components/connectButton/connectButton";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import SectionWidth from "../../components/sectionWidth/sectionWidth";
import MintCard from "../../components/mintCard/mintCard";
import Footer from "../../components/footer/footer";
import Message from "../../components/message/message";

const Mint = () => {
  const { pushMessage } = useSelector((state) => state.notification);
  const NFTs = [
    {
      id: 1,
      name: "Terra Hog",
      cost: 0.02,
      symbol: "terra",
      image: "/art/barrel.gif",
    },
    {
      id: 2,
      name: "Shy Hog",
      cost: 0.03,
      symbol: "shy",
      image: "/art/logo.gif",
    },
  ];

  return (
    <>
      {!!pushMessage ? <Message message={pushMessage} /> : ""}

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
