import React from "react";
import styles from "./Card.module.css";

export default function Card({ name, image, genres, rating }) {
  return (
    <div className={styles.conteiner}>
      <div className={styles.card}>
        <span className={styles.name}>{name}</span>

        <img className={styles.cardImg} src={image?image:"https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg"} alt="card" />
        <div className={styles.genres}>
          <span>{genres?.join(" - ")}</span>
        </div>
        <div className={styles.rating}>
        <span>{rating}</span>
      </div>
      </div>
    </div>
  );
}
