import React from "react";
import { Form, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';





const Filter = ({handleInputTitle , ratingChanged}) => {


    return (
        <>
            <Form className="d-flex">
                <Form.Control 
                    type="search"
                    placeholder="Search Title"
                    className="me-2"
                    aria-label="Search" 
                    onChange={(e)=>handleInputTitle(e.target.value)}
                />
                
            {/* <input type="text" onChange = {(e)=> handleInputTitle(e.target.value)} /> */}

            </Form>
            <h2>Search Rating:</h2>
            
            <StarRatingComponent 
          name="rate1" 
          starCount={10}
         
          onStarClick={(e)=>ratingChanged(e)}
        />
           
        </>
    )
}
export default Filter