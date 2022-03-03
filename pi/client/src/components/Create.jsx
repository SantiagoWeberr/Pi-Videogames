import React ,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genreGet, postVideogame } from "../actions";
import styles from "./Create.module.css"

export default function Create() {
  const dispatch = useDispatch();
  const genreState = useSelector((state) => state.genre);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genre: [],
  });

  useEffect(() => {
    dispatch(genreGet());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleGenre(e) {
    setInput({
      ...input,
      genre: [...input.genre, e.target.value],
    });
  }

  function handleDelete(e) {
    setInput({
      ...input,
      genre: input.genre.filter((genre) => genre !== e),
    });
  }
  function handleSumbit(e) {
    e.preventDefault();
    dispatch(postVideogame(input));
    alert("Videogame created succesfuly!")
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      platforms: "",
      genre: [],
    });
  }

  return (
    <div className={styles.bkg}>
      <Link to="/home">
        <button className={styles.btn} type="button">Back to Home</button>
      </Link>
      <form className={styles.form} onSubmit={(e)=>{handleSumbit(e)}}>
        <label>Name</label>
        <input
          type="text"
          value={input.name}
          name="name"
          onChange={handleChange}
          placeholder="Name"
        ></input>

        <label>Description</label>
        <input
          type="text"
          value={input.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></input>

        <label>Released</label>
        <input
          value={input.released}
          name="released"
          onChange={handleChange}
          type="date"
        ></input>

        <label>Rating</label>
        <input
          value={input.rating}
          name="rating"
          onChange={handleChange}
          placeholder="Rating"
          type="number"
        ></input>

        <label>Platforms</label>
        <input
          value={input.platforms}
          name="platforms"
          onChange={handleChange}
          placeholder="Platforms"
          type="text"
        ></input>

<div className={styles.genre}>
        <select name="genres"  onChange={(e)=>{handleGenre(e)}} >
          <option >Genres</option>
          {genreState.map((g) => {

            return <option value={g.name} key={g.id}>{g.name}</option>

          })}
        </select>
</div>
        <button type="submit">
          Submit
        </button>
      </form>
      {input.genre.map((e) => {
        return (
          <div className={styles.labelGenre} key={e}>
            <label  >{e}</label>
            <button className={styles.btnx} type="button" onClick={()=>{handleDelete(e)}} value="x" name="button close">
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
