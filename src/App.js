import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Using Routes instead of Router
import RegistrationForm from './container/RegistrationForm/RegistrationForm';
import Car from './container/Available/cars';
import AgencyLogin from './agency/agencylogin';
import Login from './container/login/index';


function App() {
  return (
    <div>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path="/agencylogin" element={<AgencyLogin />} />
        <Route path="/AvaliableCars" element={<Car/>} />
      </Routes>
    </div>
  );
}

export default App;
