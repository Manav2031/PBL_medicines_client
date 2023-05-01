import React from "react";

function Consent(){
    return( <div class="a">
    <center>
        <pre>
            Do you want to confirm and proceed <br /> with the prescription?
        </pre>
        <button class="abc">Yes, I want to proceed</button>
        <button class="xyz">No
            <span class="popup">If you don't want to proceed, you can consider taking screenshot of the prescription</span>
        </button>
       
    </center>
</div>);
}

export default Consent;