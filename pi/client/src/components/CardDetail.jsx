import React from "react";
import styles from "./CardDetail.module.css"


export default function CardDetail({name,image,genres,rating,description,platforms,released}) {
  return (
    <div className={styles.bkg}>
      <div className={styles.name}>
        <span>{name}</span>
      </div>
      <div >
        <img className={styles.image} src={image} alt="card" />
      </div>
      <div className={styles.detail}>
        <span>Genres: {genres?.join(" - ")}</span>
      </div>
      <div className={styles.detail}>
        <span>Description: {description}</span>
      </div>
      <div className={styles.detail}>
        <span>Released: {released}</span>
      </div>
      <div className={styles.detail}>
        <span>Rating: {rating}</span>
      </div>
      <div className={styles.detail}>
        <span>Platforms: {platforms?.join(" - ")}</span>
      </div>
    </div>
  );
}
