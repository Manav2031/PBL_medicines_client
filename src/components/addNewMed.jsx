import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Web3 from 'web3';
import Contract from "../contract/constractABI.json"
export default function AddMed(){
    const [med,setMed]=useState({
        name:"",
        quantity:0,
        exp_date:"",
        price:0,
        batchID:"",
        manufacturer:""
    })
    useEffect(()=>{
      
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

  const handleVerify=async(event)=>{
    const contractAbi = Contract.abi; // Insert your contract's ABI here
    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Insert your contract's address here
    const web3 = new Web3(Web3.givenProvider);
    // const provider = window.ethereum;
    // contract.setProvider(web3.currentProvider);
    const contract = await new web3.eth.Contract(contractAbi, contractAddress);
    if (typeof window.ethereum !== 'undefined') {
      // Provider is available
      // Your code to instantiate web3 and connect to the provider
      console.log("provider set")
    } else {
      // Provider is not available
      // Handle the case where the user doesn't have a provider installed or enabled
      console.log("provider NOT set")
    }

    
    // contract.methods.getBatchDetails(med.batchID)
    // .call()
    //   // .send({from:' 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'})
    //   .then((res) => console.log(res))
    //   .catch(error => console.error(error));

      event.preventDefault()
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
