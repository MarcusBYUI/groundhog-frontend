import React from "react";
import Header from "../../components/header/header";
import Hero from "./hero/hero";
import MintSection from "./mintSection/mintSection";
import StakingSection from "./stakingSection/stakingSection";

const Hompage = () => {
  return (
    <>
      <Header />
      <Hero />
      <MintSection />
      <StakingSection />
    </>
  );
};

export default Hompage;
