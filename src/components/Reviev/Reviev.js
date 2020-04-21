import React from "react";
import styles from "./Reviev.module.css";
const Reviev = ({ items }) => {
  if (items.length === 0) return <div><p>We don't have any reviews for this movie!(</p></div>;
  return (
    <div>
      <ul className={styles.revievList}>
        {items.map((item) => (
          <li className={styles.revievListItem} key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviev;
