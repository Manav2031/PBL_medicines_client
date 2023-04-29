import React,{useState} from "react";
import Form from 'react-bootstrap/Form';

export default function Details() {
    const [details,setDetails] = useState({
        name:"",
        doctor:"",
        email:""
    })

    console.log(details)

    function handleChange(event) {
        const {name,value}=event.target;
        setDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <Form className="lovw">
      <Form.Group className="mb-3">
        <Form.Label>Name of Patient</Form.Label>
        <Form.Control type="text" placeholder="Enter Patient's Name" className="tish"  name="name"
                value={details.name}
                onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name of Doctor</Form.Label>
        <Form.Control type="text" placeholder="Enter Doctor's Name" className="tish"  name="doctor"
                value={details.frequency}
                onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Patient's Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Patient's Email ID" className="tish"  name="email"
                value={details.email}
                onChange={handleChange}/>
      </Form.Group>
    </Form>
    )
}