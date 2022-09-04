import React from "react";

import Header from "../../components/header/header";
import Hero from "./hero/hero";
import MintSection from "./mintSection/mintSection";
import StakingSection from "./stakingSection/stakingSection";
import Footer from "../../components/footer/footer";
import Login from "../../components/login/login";
import { useSelector } from "react-redux";

const Hompage = () => {
  const authState = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      <Hero />
      <MintSection />
      <StakingSection />
      <Footer />
      {authState.loginPop && <Login />}
    </>
  );
};

export default Hompage;
