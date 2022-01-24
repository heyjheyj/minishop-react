import React from "react";
import styles from "./header.module.css";

const Header = ({ refresh }) => {
  const handleRefresh = refresh;

  return (
    <>
    <button className={styles.header} onClick={handleRefresh}>
      <img className={styles.logoIcon} src="img/logo.png" alt="logo" />
    </button>
    </>
  );
};

export default Header;
