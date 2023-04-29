import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Details from "../components/details";
import MedDetails from "../components/meddetails";

export default function Prescription() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div>
      <Details />
      <MedDetails />
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </div> 
    )
}