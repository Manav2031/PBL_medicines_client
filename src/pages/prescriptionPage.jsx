import React,{useState} from "react";
import Prescription from "../components/prescription";
import Display from "../components/displayprescription";

export default function PrescriptionPage() {
    const [presc,setPresc]=useState([])
    function addMedicine(prescription) {
        setPresc(prevValue => {
            return [...prevValue, prescription]
        })
    }
    return (
        <div>
        <Prescription onAdd={addMedicine} />
        {presc.map((prescItem, index) => {
            return (
                <Display
                    key={index}
                    id={index}
                    name={prescItem.name}
                    frequency={prescItem.frequency}
                    days={prescItem.days}
                />
            );
        })}
        </div>
    )
}