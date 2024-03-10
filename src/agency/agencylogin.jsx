import React, { useState } from 'react';
import './Vechicle.css'; // Import your CSS file
import Cars from '../container/Available/cars';
import axios from 'axios';
import { Link } from 'react-router-dom';
const VehicleForm = () => {
  const [formData, setFormData] = useState({
    model: '',
    vehicleNumber: '',
    seatingCapacity: '',
    rentPerDay: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
   const formValue = { vehicleNumber: formData.vehicleNumber, model: formData.model, seatingCapacity: formData.seatingCapacity, rentPerDay: formData.rentPerDay };
const load = async () => {
  try {
    const result = await axios.post('http://localhost/React-php/api/car.php',formValue);
    console.log(formValue);
    // Handle the result as needed
  } catch (error) {
    console.error('Error during registration:', error.message);
  }
};


 const handleSubmit = (e) => {
   e.preventDefault();
   load();

  console.log('Form Data:', formData);

 
  setFormData({
    model: '',
    vehicleNumber: '',
    seatingCapacity: '',
    rentPerDay: '',
    image: null,
  });
};

    
 

    // Additional logic for handling form data


  return (
    <div>
      <div style={{ position: 'absolute', display: 'flex', float: 'right', marginBottom: "10%", }}>
          
     <Link to="/">  <li className='link' style={{marginTop:'45%'}}>LogIn</li></Link> 
       <Link to="/AvaliableCars">  <li className='link'>AvailbleCars</li></Link> 
             
          </div>
   
      <img src="imgs\slide_2.jpg" id="slide" alt="Slide"></img>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <br />
        <label className='name'>
          Vehicle Model:
        </label>
        <input type="text" className='add' placeholder='Model'
          name="model" value={formData.model} onChange={handleChange} required />
        <br />

        <label className='name'>
          Vehicle Number:
        </label>
        <input type="text" className='add' placeholder='Vehicle number'
          name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} required />
        <br />

        <label className='name'>
          Seating Capacity:
        </label>
        <input type="number" className='add' placeholder='Seating capacity'
          name="seatingCapacity" value={formData.seatingCapacity} onChange={handleChange} required />
        <br />

        <label className='name'>
          Rent per Day:
        </label>
        <input type="number" className='add' placeholder='Rent Per day'
          name="rentPerDay" value={formData.rentPerDay} onChange={handleChange} required />
        <br />

        <label className='name'>
          Upload Image:
        </label>
        <input type="file"  className='add' name="image" onChange={handleChange} accept="image/*" />
        <br />

        <button type="submit" id="submit">Submit</button>
      </form>
    </div>
  );
};

export default VehicleForm;
