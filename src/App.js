import React from "react";
import {createContext, useReducer} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import AddMedPage from "./pages/addMedPage";
import MedDashboard from "./pages/MedDashboard";
import Status from "./pages/statusPage";
import Navbar from "./components/navbar";
import NavbarMedical from "./components/navbarmedical";
import Home from "./pages/homePage";
import Login from "./pages/Login";
import Consent from './pages/consentPage';
import PrescriptionPage from "./pages/prescriptionPage";
import Logout from "./pages/Logout";
import {initialState, reducer} from "../src/reducer/UseReducer";
import loggedindoctor from "./components/navbar";

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    {loggedindoctor ? <Navbar /> : <NavbarMedical />}
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/login' element={<Login />} /> 
        <Route path='/meddashboard' element={<MedDashboard />} />
        <Route path='/addmed' element={<AddMedPage />} />
        <Route path='/status' element={<Status />} />
        <Route path='/consent' element={<Consent />} />
        <Route path='/prescriptionpage' element={<PrescriptionPage />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
