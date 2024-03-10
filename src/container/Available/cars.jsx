import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);

 const gather = async () => {
  try {
    const result = await axios.get('http://localhost/React-php/api/car.php');

    if (Array.isArray(result.data)) {
      setCars(result.data);
    } else {
      console.error('Invalid car data format:', result.data);
    }
  } catch (error) {
    console.error('Error fetching car data:', error.message);
  }
};


  useEffect(() => {
    gather();
  }, []);

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100px',
          background: 'yellow',
          textAlign: 'center',
        }}
      >
        <h1>AvaliableCars</h1>
      </div>
      {cars.map((car, index) => (
        <div
          key={index}
          style={{
            width: '300px',
            height: '300px',
            float: 'left',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            marginLeft: '20px',
            marginTop: '20px',
          }}
        >
          <h3>Model: {car.model}</h3>
          <h3>Number: {car.number}</h3>
          <h3>Seating: {car.seating}</h3>
          <h3> Rent: {car.rent}</h3>
          <button
            style={{
              width: '80%',
              height: '50px',
              backgroundColor: 'green',
              cursor: 'pointer',
              marginTop: '30px',
            }}
            onClick={() => {
              alert('Booking Successful');
            }}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cars;
