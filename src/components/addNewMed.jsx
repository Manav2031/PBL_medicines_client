import React, { useState } from 'react';

export default function AddMed(){
    const {med}=useState({
        name:" ",
        quantitY:" ",

    })

    return(
        <div>
           <h1>NEW MED STOCK</h1>
            
            <form class="" action="index.html" method="post">
                <label>
                    medicine name:
                </label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <label>
                    quantity:
                </label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <label>
                    expiration date:
                </label>
                <input type="date"></input>
                <br></br>
                <br></br>
                <label>
                    description:
                </label>
                <input type="text"></input>
                <br></br>
                <br></br>
                {/* <label>
                    price:
                </label> */}

                
                

                
                
            </form>
        </div>
    )
}

