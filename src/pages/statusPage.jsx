import React from "react";

export default function Status()
{
    const available=true;
    return (
        <div classname="status-page">
            <Available />
        </div>
    )
}

function Available() 
{
    return (
        <div className="available">
              <h3> Order placed successfully </h3>
        </div>
    )
}
