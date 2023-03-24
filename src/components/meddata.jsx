import React from "react"

export default function MedData(props) {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p> Description: {props.description} </p>
            <p> Expiry Date: {props.expirydate} </p>
            <p> Quantity: {props.quantity} </p>
            <p> Purchase Date: {props.purchasedate} </p>
            <p> Price: {props.price} </p>
            <hr />
        </div>
    )
}