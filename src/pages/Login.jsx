import React,{useState} from "react";
import LoginDoctor from "../pages/LoginDoctor";
import LoginMedical from "../pages/LoginMedical";

function Login() {
    const [formData, setFormData]=useState({
        isDoctor:false,
        isMedical:false
    })

    function handleChange(event) {
        const {name,value,type,checked}=event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type==="checkbox"?checked:value
            }
        })
    }

        return (
            <>
                <form>
            <input 
               type="checkbox"
               id="isDoctor"
               checked={formData.isDoctor}
               onChange={handleChange}
               name="isDoctor"
               />
               <label htmlFor="isDoctor">Are you Doctor?</label>
               <br></br><br></br>
               <input 
               type="checkbox"
               id="isMedical"
               checked={formData.isMedical}
               onChange={handleChange}
               name="isMedical"
               />
               <label htmlFor="isMedical">Are you Medical Owner?</label>
        </form>
                <LoginDoctor />
                <LoginMedical />
                </>
          );
}

export default Login;