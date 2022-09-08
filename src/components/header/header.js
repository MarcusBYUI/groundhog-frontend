import React from "react";
import SectionWidth from "../sectionWidth/sectionWidth";
import { NavLink, Link } from "react-router-dom";

import styles from "./header.module.css";
const Header = () => {
  return (
    <header>
      <SectionWidth>
        <div className={styles.headerGrid}>
          <div className={styles.logoImage}>
            <Link to="/">
              <img src={require("../../assets/logo.png")} alt="logo" />
            </Link>
          </div>
          <nav>
            <div>
              <ul>
                <li>
                  {" "}
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#cf754a" : "",
                    })}
                    to="/mint"
                  >
                    Mint
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#cf754a" : "",
                    })}
                    to="/stake"
                  >
                    Stake
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/stake">Account</Link>
          </nav>
        </div>
      </SectionWidth>
    </header>
  );
};

export default Header;
