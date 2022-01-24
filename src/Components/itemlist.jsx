import React from "react";
import styles from "./itemlist.module.css";

const Itemlist = props => {
  const { items, display } = props;
  console.log('itmes', items)
  console.log('displayFunction:', display)

  return (
    <>
    <div className={styles.itemlist}>
      {display(items)}
    </div>
    </>
  );
};

export default Itemlist;
