import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Prescription(props) {
    const [details,setDetails] = useState({
        name:"",
        doctor:"",
        email:""
    })

    const [medicine,setMedicine] = useState({
        name:"",
        frequency:0,
        days:0
    })


    function handleChange1(event) {
        const {name,value}=event.target;
        setDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleChange2(event) {
        const {name,value}=event.target;
        setMedicine(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        props.onAdd(medicine);
        setMedicine({
            name: "",
            frequency:0,
            days:0
        })
        event.preventDefault();
    }

    return (
        <Form className="lovw">
        <Form.Group className="mb-3">
          <Form.Label>Name of Patient</Form.Label>
          <Form.Control type="text" placeholder="Enter Patient's Name" className="tish"  name="name"
                  value={details.name}
                  onChange={handleChange1}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name of Doctor</Form.Label>
          <Form.Control type="text" placeholder="Enter Doctor's Name" className="tish"  name="doctor"
                  value={details.frequency}
                  onChange={handleChange1}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Patient's Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Patient's Email ID" className="tish"  name="email"
                  value={details.email}
                  onChange={handleChange1}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Name of Medicine</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" className="tish"  name="name"
                value={medicine.name}
                onChange={handleChange2}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of times in a day</Form.Label>
        <Form.Control type="text" placeholder="Enter Frequency" className="tish"  name="frequency"
                value={medicine.frequency}
                onChange={handleChange2}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of days</Form.Label>
        <Form.Control type="text" placeholder="Enter Number of Days" className="tish"  name="days"
                value={medicine.days}
                onChange={handleChange2}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Quantity" className="tish"
                value={medicine.frequency * medicine.days}
                onChange={handleChange2}/>
      </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </Form>
    )
}