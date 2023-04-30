import React from "react";

export default function Display(props) {
    return (
        <div className="display-note">
        <div className="note">
            <h1> {props.name} </h1>
            <p> {props.frequency} </p>
            <p> {props.days} </p>
        </div>
        </div>
    )
}