import React from "react"

export default function MedData(props) {
    return (
        <div>
            <p> {props.name} </p>
            <p> {props.description} </p>
            <p> {props.expirydate} </p>
            <p> {props.quantity} </p>
            <p> {props.purchasedate} </p>
            <p> {props.price} </p>
        </div>
    )
}