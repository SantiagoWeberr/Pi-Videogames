import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { genreGet, filterGenre, orderFilter } from "../actions";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(genreGet());
  }, [dispatch]);

  // function handleChangeName(e) {
  //   e.preventDefault();
  //   dispatch(filterName(e.target.value));
  // }
  // function handleChangeRating(e) {
  //   e.preventDefault();
  //   dispatch(filterRating(e.target.value));
  // }
  function handleChangeGenre(e) {
    e.preventDefault();
    dispatch(filterGenre(e.target.value));
  }
  function handleChange(e) {
    e.preventDefault();
    dispatch(orderFilter(e.target.value));
  }

  return (
    <div>
      <SearchBar />
      <div className={styles.filtersConteiner}>
        <select
          className={styles.select}
          value="sort by genre"
          onChange={handleChangeGenre}
        >
          <option >Sort By Genre</option>
          <option value="ALL">ALL</option>
          {genre?.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value="sort by name"
          onChange={handleChange}
        >
          <option >Sort By Name</option>
          <option value="ALL">ALL</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select
          className={styles.select}
          value="sort by rating"
          onChange={handleChange}
        >
          <option >Sort By Rating</option>
          <option value="ALL">ALL</option>
          <option value="ASC">Ascendent</option>
          <option value="DESC">Descendent</option>l
        </select>

        <Link to="/create">
          <input className={styles.select} type="button" value="Create Videogame"></input>
        </Link>

      </div>
    </div>
  );
}
