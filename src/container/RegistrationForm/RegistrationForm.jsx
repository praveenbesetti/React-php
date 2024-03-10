import React, { useState } from 'react';
import './style1.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const initialFormData = {
    name: '',
    number: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
   const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (Object.values(formData).some((value) => value.trim() === '')) {
      alert(`Please fill in all fields.`);
      return;
    }

    // Validate if the number is an integer
    if (!/^\d+$/.test(formData.number)) {
      alert(`Please enter a valid number.`);
     
    }

    console.log(formData);
  
    try {
      const response = await axios.post('http://localhost/React-php/api/user.php',formData);

      // Check if the request was successful
      if (response.status === 201) {
        // Successful response, navigate and reset form data
        navigate('/');
        setFormData({ ...initialFormData });
      } else {
        // Handle other status codes or conditions if needed
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error during registration:', error.message);
      alert('An error occurred during registration. Please try again.');
    }
  }
  return (
    <div>
      <img src="imgs/car_on_road.png" id="car" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Name"
          className="enter"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Number"
          className="enter"
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter Email"
          className="enter"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter password"
          className="enter"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" id="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
