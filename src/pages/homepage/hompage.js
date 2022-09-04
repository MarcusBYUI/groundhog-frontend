import React from "react";

import Header from "../../components/header/header";
import Hero from "./hero/hero";
import MintSection from "./mintSection/mintSection";
import StakingSection from "./stakingSection/stakingSection";
import Footer from "../../components/footer/footer";
import Login from "../../components/login/login";

const Hompage = () => {
  return (
    <>
      <Header />
      <Hero />
      <MintSection />
      <StakingSection />
      <Footer />
      <Login />
    </>
  );
};

export default Hompage;
