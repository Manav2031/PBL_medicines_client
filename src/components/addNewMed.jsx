import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function AddMed(){
    const {med,setMed}=useState({
        name:" ",
        quantity:0,
        expiery_date:" ",
        price:0
    })

    return(
       
        
        
        // <div class="container">
           
           
            
        //     <form action="">
        //     <h1 className="heads">NEW MEDICINE STOCK</h1>
        //     <fieldset>
        //     <legend>Details</legend>
        //     <label className="name">
        //              Name:
        //         </label>
        //         <div className="input-group mb-3">
        //         <span className="input-group-text" id="basic-addon1">@</span>
        //         <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
        //         </div>

        //         <br></br>
        //         <br></br>
        //         <label>
        //             Quantity:
        //         </label>
        //         <input type="text"></input>
        //         <br></br>
        //         <br></br>
        //         <p>
        //             Description:<textarea name="description" id="description" cols="40" rows="4"></textarea>

        //         </p>
            
      
            
        //     </fieldset>
        //     <label>
               
        //             Expiration date:
        //         </label>
        //         <input type="date"></input>
        //         <br></br>
        //         <br></br>
        //         <label>
        //             price:
        //         </label>
        //         <input type="number"></input>
        //         <br></br>
        //         <input className="submitbutton" type="submit"></input>
        //        </form>
            
        // </div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}
