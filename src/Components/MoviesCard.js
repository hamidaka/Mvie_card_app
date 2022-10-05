import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './MovieCard.css'




const MovieCard = ({el}) => {

    return (
        

        <Card id="movie-card ">
            <Card.Img id="movieImg" variant="top" src={el.imgUrl} />
            <Card.Body id="cardBody" >
                <Card.Title id="movieTitle">{el.titre}</Card.Title>
                <Card.Text id="rating" >
                    {el.rating}
                </Card.Text>
                <Card.Text id="movieDesc" >
                    {el.Discription}
                </Card.Text>
               

            </Card.Body>
          
        </Card>
    

    )
}



export default MovieCard;