import React from "react";
import MedData from "../components/meddata.jsx";

function MedDashboard()
{
    return (
        <div>
            <MedData 
                name="Paracetamol"
                description="Used in fever"
                expirydate="2023-06-05"
                quantity={300}
                purchasedate="2023-03-07"
                price={150}

            />
            <MedData
                name="Dolo-650"
                description="Used in Covid-19"
                expirydate="2024-06-02"
                quantity={500}
                purchasedate="2023-03-07"
                price={200}

            />
            <MedData
                name="Gelusil"
                description="Acidity"
                expirydate="2025-06-05"
                quantity={800}
                purchasedate="2023-03-07"
                price={250}

            />

        </div>
    )
}

export default MedDashboard