import "./app.module.css";
import Header from "./Components/header";
import styles from "./app.module.css";
import Navbar from "./Components/navbar";
import Itemlist from "./Components/itemlist";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [originItems, setOriginItems] = useState([]);
  const [items, setItems] = useState([]);

  const getData = useCallback(
    () => {
      return fetch("./data/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          const items = json.items;
          setOriginItems(items);
          setItems(items);
        });
    },
    [setOriginItems, setItems]
  );

  // main

  useEffect(
    () => {
      getData();
    },
    [getData]
  );

  const onTypeFilter = useCallback(
    (items, event) => {
      const key = event.target.dataset.key;
      const value = event.target.dataset.type;
      console.log("key:", key);
      console.log("value:", value);
      if (key === null || value === null) {
        return;
      } else {
        const newitems = [];
        originItems &&
          originItems.map(
            item => (item.type === key ? newitems.push(item) : setItems(items))
          );
        setItems(newitems);
      }
    },
    [setItems, originItems]
  );

  const onColorFilter = useCallback(
    (items, event) => {
      const key = event.target.dataset.key;
      const value = event.target.dataset.type;
      console.log("key:", key);
      console.log("value:", value);
      if (key === null || value === null) {
        return;
      } else {
        const newitems = [];
        originItems &&
          originItems.map(
            item => (item.color === key ? newitems.push(item) : setItems(items))
          );
        setItems(newitems);
      }
    },
    [setItems, originItems]
  );

  function displayItems(items) {
    return items.map(item =>
      <li key={item.id} className={styles.item}>
        <img src={item.image} alt="item" className={styles.itemUrl} />
        <p className={styles.itemtypes}>
          {item.gender}, {item.type}
        </p>
      </li>
    );
  }

  const refresh = event => {
    window.location.reload(false);
    console.log("refresh request");
  };

  return (
    <div className={styles.box}>
      <Header refresh={refresh} />
      <Navbar
        items={originItems}
        onTypeFilter={onTypeFilter}
        onColorFilter={onColorFilter}
      />
      <Itemlist items={items} display={displayItems} />
    </div>
  );
}

export default App;
