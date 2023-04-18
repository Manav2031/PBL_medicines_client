import React from "react";

export default function Status()
{
    const available=true;
    if(available===true) {
    return (
        <div>
            <Available />
        </div>
    )
    }
    else {
        return (
            <div>
                <NotAvailable />
            </div>
        )
    }
}

function Available() 
{
    return (
        <div className="available">
              <h3> Order placed successfully </h3>
        </div>
    )
}

function NotAvailable() 
{
    return (
        <div className="notavailable">
              <h3> Medicines are not available </h3>
        </div>
    )
}