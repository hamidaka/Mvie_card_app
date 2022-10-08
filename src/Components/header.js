import React from 'react'
import  { useState } from 'react';
import '../Components/header.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



 function Header( {handleAdd}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [input , setInput] = useState ({
    titre : '' ,
    Discription : '' ,
    rate : '' ,
    imgUrl : '',
    id : Math.random()
  })
  
  const AddNewMovie = () => {
    handleAdd(input)
    setShow(false)
  }

  const handleChange = (e) => {
    setInput({...input ,[e.target.name] : e.target.value })
  }
  
  return (
    
    <header>
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <h1 to="/">Movie app</h1>
        </div>

        <ul className="nav-links">
          

          <li>
          <Button variant="primary" onClick={handleShow}>
       Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"   name='titre'  onChange={handleChange} 
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="img"  name='imgUrl'  onChange={handleChange} 
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                  name = 'rate' onChange={handleChange} 
                
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1" 
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name ='Discription' rows={3}   onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddNewMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </li>
        </ul>
      </div>
    </div>
  </header>
 
 
  )
}
export default Header

