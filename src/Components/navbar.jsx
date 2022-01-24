import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ items, onTypeFilter, onColorFilter }) => {
  console.log(items);

  const colorFilter = event => {
    onColorFilter(items, event);
  };

  const onFilter = event => {
    onTypeFilter(items, event);
  };

  return (
    <ul className={styles.nav}>
      <button className={styles.filterIcon}>
        <img
          className={styles.filt}
          src="img/blue_p.png"
          alt="blueP"
          data-type="type"
          data-key="pants"
          onClick={onFilter}
        />
      </button>
      <button className={styles.filterIcon}>
        <img
          className={styles.filt}
          src="img/pink_s.png"
          alt="pinkS"
          data-type="type"
          data-key="skirt"
          onClick={onFilter}
        />
      </button>
      <button className={styles.filterIcon}>
        <img
          className={styles.filt}
          src="img/yellow_t.png"
          alt="yellowT"
          data-type="type"
          data-key="tshirt"
          onClick={onFilter}
        />
      </button>
      <button
        className={styles.filterIconB}
        data-type="color"
        data-key="blue"
        onClick={colorFilter}
      >
        BLUE
      </button>
      <button
        className={styles.filterIconP}
        data-type="color"
        data-key="pink"
        onClick={colorFilter}
      >
        PINK
      </button>
      <button
        className={styles.filterIconY}
        data-type="color"
        data-key="yellow"
        onClick={colorFilter}
      >
        YELLOW
      </button>
    </ul>
  );
};

export default Navbar;
