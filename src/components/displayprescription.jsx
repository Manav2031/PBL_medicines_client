import React from "react";

export default function Display(props) {
    return (
        <div className="prescription-form">
            <h1> Name: {props.name} </h1>
            <h3> Number of Times: {props.frequency} </h3>
            <h3> Number of Days: {props.days} </h3>
        </div>
    )
}