import {
    AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK,
  } from 'react-admin'; 
  import Navbar from "./components/navbar";
  import NavbarMedical from "./components/navbarmedical";
  import LoginMedical from "./pages/LoginMedical";
  import Logout from "./pages/Logout";

 export default (type, params,props) => {
  
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        
  // simple user username password, redirect funtion
        if (username === 'doctor1' && password === 'doct1') {
            localStorage.setItem('role', 'user');
            localStorage.removeItem('not_authenticated');
            {<Navbar />}
            return Promise.resolve();
          }
   //admin  role   username and password
        if (username === 'medical1' && password === 'med1') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            {<NavbarMedical />}
            return Promise.resolve();
        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    }
    if (type === AUTH_LOGOUT) {
        localStorage.setItem('not_authenticated', true);
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return Promise.resolve(role);
    }
  
    return Promise.reject('Unknown method');
  };
  