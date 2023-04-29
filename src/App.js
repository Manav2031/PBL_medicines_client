import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddMedPage from "./pages/addMedPage";
import MedDashboard from "./pages/MedDashboard";
import Status from "./pages/statusPage";
import Navbar from "./components/navbar";
import Home from "./pages/homePage";
import Consent from './pages/consentPage';
import PrescriptionPage from "./pages/prescriptionPage";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/meddashboard' element={<MedDashboard />} />
        <Route path='/addmed' element={<AddMedPage />} />
        <Route path='/status' element={<Status />} />
        <Route path='/consent' element={<Consent />} />
        <Route path='/prescriptionpage' element={<PrescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
