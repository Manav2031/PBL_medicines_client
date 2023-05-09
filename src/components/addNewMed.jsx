import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function AddMed(){
    const [med,setMed]=useState({
        name:"",
        quantity:0,
        exp_date:"",
        price:0,
        batchID:"",
        manufacturer:""
    })


    function handleChange(event) {
      const { name, value } = event.target;
      setMed(prevValue => {
          return {
              ...prevValue,
              [name]: value
          };
      });
  }

  function handleSubmit(event) {
    console.log(med)
    axios.post('http://localhost:5000/med/',med).then((res)=>{
      console.log(res.data);
    })
    console.log(med)
    event.preventDefault()
  }

  function handleVerify(){
    const contractAbi = [ ]; // Insert your contract's ABI here
    const contractAddress = '0x1234567890123456789012345678901234567890'; // Insert your contract's address here

const contract = new web3.eth.Contract(contractAbi, contractAddress);

const newValue = 42;

contract.methods.setValue(newValue).send()
  .then(() => console.log("Value set successfully"))
  .catch(error => console.error(error));
  }

    return(
        <Form className="lovw">
      <Form.Group className="mb-3">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" className="tish"  name="name"
                value={med.name}
                onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter quantity" className="fish" name="quantity"
        value={med.quantity} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" className="lish" name="price"
        value={med.price} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expiration date</Form.Label>
        <Form.Control type="date" placeholder="Enter date of expiry" className="pish" name="exp_date"
        value={med.exp_date} onChange={handleChange} />
      </Form.Group>
      <div className='verify'>
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Medicine manufacturer</Form.Label>
            <Form.Control type="text" placeholder="Enter name" className="tish"  name="manufacturer"
                    value={med.manufacturer}
                    onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>batchID</Form.Label>
            <Form.Control type="text" placeholder="Enter batchID" className="tish"  name="batchID"
                    value={med.batchID}
                    onChange={handleChange}/>
          </Form.Group>
          </div>
      <Button variant="primary" type="submit" onClick={handleVerify}>
        Verify
      </Button></div>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    )
}
