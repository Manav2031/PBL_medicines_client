import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function MedDetails() {
    const [medicine,setMedicine] = useState({
        name:"",
        frequency:0,
        days:0
    })

    console.log(medicine)

    function handleChange(event) {
        const {name,value}=event.target;
        setMedicine(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <Form className="lovw">
      <Form.Group className="mb-3">
        <Form.Label>Name of Medicine</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" className="tish"  name="name"
                value={medicine.name}
                onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of times in a day</Form.Label>
        <Form.Control type="text" placeholder="Enter Frequency" className="tish"  name="frequency"
                value={medicine.frequency}
                onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of days</Form.Label>
        <Form.Control type="text" placeholder="Enter Number of Days" className="tish"  name="days"
                value={medicine.days}
                onChange={handleChange}/>
      </Form.Group>
    </Form>
    )
}