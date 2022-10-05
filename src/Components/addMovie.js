import React ,{useState} from 'react'

import '../Components/addMovies.css';
import { Button} from 'react-bootstrap';

 function AddMovie() {

  return (
    
<div className="containeru">
  <form action="/action_page.php">
  <div className="row">
    <div className="col-25">
      <label htmlFor="fname">Title</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="firstname"/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="lname">Discription</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="lname">posterURL</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname"/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="lname">rating</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" />
    </div>
  </div>
 

 
  <div className="row">
  <Button className="Button" variant="success">Add New Movie</Button>
  </div>
  
  </form>
</div>
  )
}

export default AddMovie
