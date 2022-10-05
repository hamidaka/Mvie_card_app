import React from "react";
import { Form, Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";





const Filter = (props) => {


    return (
        <>
            <Form className="d-flex">
                <Form.Control 
                    type="search"
                    placeholder="Search Title"
                    className="me-2"
                    aria-label="Search" onChange={props.handleInputTitle}
                />
                <Button className="searchButton" variant="outline-success" onClick={props.handleSearchTitle} >Search Title</Button>

            </Form>
            <h2>Search Rating:</h2>
            <ReactStars
                count={5}
                onChange={props.ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            
            
           
        </>
    )
}
export default Filter