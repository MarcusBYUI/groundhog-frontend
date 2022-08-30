import React from "react";
import styles from "./sectionWidth.module.css";

const SectionWidth = (props) => {
  return <div className={styles.sectionwidth}>{props.children}</div>;
};

export default SectionWidth;
