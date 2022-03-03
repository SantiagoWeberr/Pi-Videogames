import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { videogamesById } from "../actions";
import CardDetail from "./CardDetail";

export default function Details() {
  const { id } = useParams();
  // console.log(props.match.params.id)
  const dispatch = useDispatch();

  const renderDetails = useSelector((state) => state.videogameDetail);

  useEffect(() => {
    dispatch(videogamesById(id));
  }, [dispatch, id]);

 
  return (
    <div>
      
      <CardDetail
        name={renderDetails.name}
        image={renderDetails.image?renderDetails.image:"https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg"} 
        genres={renderDetails.genres}
        rating={renderDetails.rating}
        description={renderDetails.description}
        released={renderDetails.released}
        platforms={renderDetails.platforms}
      />
    </div>

    // <div>
    //   <h3>soy details</h3>
    //   {renderDetails.length > 0 ? (
    //     <CardDetail
    //       name={renderDetails.name}
    //       image={renderDetails.image}
    //       genre={renderDetails.genre}
    //       rating={renderDetails.rating}
    //     />
    //   ) : (
    //     <h1> loading...</h1>
    //   )}
    // </div>
  );
}
