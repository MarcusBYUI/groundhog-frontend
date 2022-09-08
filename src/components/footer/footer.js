import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import SectionWidth from "../sectionWidth/sectionWidth";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <SectionWidth>
        <div className={styles.footer}>
          <h4>All rights Reserved. © {year} GroundHog Mining.</h4>
          <div>
            <h4>Links</h4>
            <a
              href="/doc/IHASH-WHITEPAPER.pdf"
              target="_blank"
              rel="noreferrer"
            >
              WhitePaper
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
          <div>
            <h4>Pages</h4>
            <Link to="/mint">Mint</Link>
            <Link to="/stake">Stake</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Support
            </a>
          </div>
        </div>
      </SectionWidth>
    </footer>
  );
};

export default Footer;
