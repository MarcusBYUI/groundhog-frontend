import React from "react";

import ConnectButton from "../../components/connectButton/connectButton";
import Card from "../../components/card/card";
import Header from "../../components/header/header";

const Mint = () => {
  return (
    <>
      <Card>
        <Header />
      </Card>
      <div>
        <ConnectButton />
      </div>
    </>
  );
};

export default Mint;
