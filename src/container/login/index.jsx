import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './style.css';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]); // Initialize as an empty array

  const login = { name: 'praveen', password: 'praveen123' };

  const gether = async () => {
  try {
    const result = await axios.get('http://localhost/React-php/api/user.php');
    setUsers(Array.isArray(result.data) ? result.data : []);
    console.log(users)// Check if result.data is an array
  } catch (error) {
    console.error('Error during fetching user data:', error.message);
  }
};

  useEffect(() => {
    gether();
  }, []);

  const details = () => {
    if (name === "" || password === "") {
      alert('Please enter valid details');
    } else if (name === login.name && password === login.password) {
      navigate('/agencylogin');
    } else {
      // Ensure that users is an array before trying to use find
     
        const user = users.find((user) =>  user.email === name );

        if (user && user.password === password) {
          navigate('/AvaliableCars');
        } else {
          alert('Invalid email or password');
        }
      
    };
  }
    return (
      <div id="home">
        <div id="login">
          <div id="data">
            <label>Enter Email</label>
            <br />
            <input className='log'
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input className='log'
              placeholder="Enter password"
              type={ password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <span
              style={{
                color: 'blue',
                fontSize: '12px',
              
                cursor: 'pointer',
                marginBottom: '20px',
                marginLeft: "10%",
              
              }}
            >
              Forgot Password?
            </span>
            <br />
            <button onClick={() => details()} id="send">LOGIN</button>
            <br />
            <span style={{ fontSize: '16px', marginLeft: "10%" }}>
              Create
              <span style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px', }}>
                <Link to="/registration"> New Account?</Link>
              </span>
            </span>
          </div>
        </div>
     
        <img src="imgs\image.png" id="sideimg" />
      
      </div>
    );
  }

export default Login;
