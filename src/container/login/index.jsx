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

  const gather = async () => {
    try {
      const result = await axios.get('https://hgj3kfgr.infinityfree.com/users.php');
      setUsers(Array.isArray(result.data) ? result.data : []);
    } catch (error) {
      console.error('Error during fetching user data:', error.message);
    }
  };

  useEffect(() => {
    gather();
  }, []);

  const details = () => {
    if (name === "" || password === "") {
      alert('Please enter valid details');
    } else if (name === login.name && password === login.password) {
      navigate('/agencylogin');
    }
    else if (name === 'raju' && password === 'raju123') {
      navigate('/AvaliableCars');
    } else {
      const user = users.find((user) => user.name === name && user.password === password);

      if (user) {
        navigate('/AvailableCars');
      } else {
        alert('Invalid name or password');
      }
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
