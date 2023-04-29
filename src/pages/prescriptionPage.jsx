import React,{useState} from "react";
import Prescription from "../components/prescription";

export default function PrescriptionPage() {
    const [presc,setPresc]=useState([])
    function addMedicine(prescription) {
        setPresc(prevValue => {
            return [...prevValue, prescription]
        })
    }
    console.log(presc)
    return (
        <div>
        <Prescription onAdd={addMedicine} />
        {presc.map((prescItem, index) => {
            // return (
            //     <>
            //         key={index}
            //         id={index}
            //         name={prescItem.name}
            //         frequency={prescItem.frequency}
            //         days={prescItem.days}
            //     </>
            // );
        })}
        </div>
    )
}