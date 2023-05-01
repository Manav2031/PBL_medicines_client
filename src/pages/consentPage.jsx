import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Consent() {
    const params = useParams()

    function handleYes() {
        console.log(params)
        const id = params.id;
        axios.post('http://localhost:5000/presc/order/' + id).then(() => {
            axios.get('http://localhost:5000/presc/' + id).then((res) => {
                console.log(res.data)
                axios.post('http://localhost:5000/mail/delivered', res.data).then((res1) => console.log(res1.data))
            })
        })
    }
    return (<div className="a">
        <center>
            <pre>
                Do you want to confirm and proceed <br /> with the prescription?
            </pre>
            <button className="abc" onClick={handleYes}>Yes, I want to proceed</button>
            <button className="xyz">No
                <span className="popup">If you don't want to proceed, you can consider taking screenshot of the prescription</span>
            </button>

        </center>
    </div>);
}

export default Consent;