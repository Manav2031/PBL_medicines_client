import React, { useState } from 'react';

export default function AddMed(){
    const {med,setMed}=useState({
        name:" ",
        quantity:0,
        expiery_date:" ",
        price:0
    })

    return(
       
        
        
        <div class="container">
           
           
            
            <form action="">
            <h1 className="heads">NEW MEDICINE STOCK</h1>
            <fieldset>
            <legend>Details</legend>
            <label className="name">
                     Name:
                </label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <label>
                    Quantity:
                </label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <p>
                    Description:<textarea name="description" id="description" cols="40" rows="4"></textarea>

                </p>
            
      
            
            </fieldset>
            <label>
               
                    Expiration date:
                </label>
                <input type="date"></input>
                <br></br>
                <br></br>
                <label>
                    price:
                </label>
                <input type="number"></input>
                <br></br>
                <input className="submitbutton" type="submit"></input>
               </form>
            
        </div>
        
    )
}
