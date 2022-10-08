import React, { useState } from "react";

import { Card } from "react-bootstrap";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ el }) => {
 

  return (
    <Card id="movie-card ">
      <Card.Img
        id="movieImg"
        variant="top"
        name="img"
        src={el.imgUrl}

      />
      <Card.Body id="cardBody">
        <Card.Title id="movieTitle" >
          {el.titre} 
        </Card.Title>
        <Card.Text id="rating" >
          {el.rating}
        </Card.Text>
        <Card.Text id="movieDesc"  >
          {el.Discription}
        </Card.Text>
      </Card.Body>
      <StarRatingComponent
        name="stars" /* name of the radio input, it is required */
        value={el.rate} /* number of selected icon (`0` - none, `1` - first) */
        
        
      />
    </Card>
  );
};

export default MovieCard;
