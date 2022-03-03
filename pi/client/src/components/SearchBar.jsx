import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { videogamesByName } from "../actions";
import styles from "./SearchBar.module.css"
export default function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(videogamesByName(search));
    setSearch("")
  }

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
            className={styles.input}
          type="text"
          name="seatchInput"
          value={search}
          onChange={handleChange}
          placeholder="Search videogames"
          
        />
        <button className={styles.buttonSearch} type="submit" value="Search">
          Search
        </button>
      </form>
    </div>
  );
}
