import React from "react";
import SectionWidth from "../sectionWidth/sectionWidth";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
const Header = () => {
  return (
    <header>
      <SectionWidth>
        <div className={styles.headerGrid}>
          <div className={styles.logoImage}>
            <img src={require("../../assets/logo.png")} alt="logo" />
          </div>
          <nav>
            <div>
              <ul>
                <li>
                  {" "}
                  <Link to="/">Mint</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/">Stake</Link>
                </li>
              </ul>
            </div>
            <Link to="/">Account</Link>
          </nav>
        </div>
      </SectionWidth>
    </header>
  );
};

export default Header;
