import React from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ postsPerPage, totalPosts, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  function paginate(num) {
    setCurrentPage(num);
  }

  return (
    <nav>
      <div className={styles.todo}>
        {pages.map((num) => (
          <button className={styles.container} key={num} onClick={() => paginate(num)}>
            {num}
          </button>
        ))}
      </div>
    </nav>
  );
}
