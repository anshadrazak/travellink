import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (action === 'signIn') {
      await Sign_In();
    } else if (action === 'signUp') {
      Sign_Up();
    }
  };

  const Sign_In = async () => {
    console.log("Sign_In function called");
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: name, password: password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log('Sign in successful', data);
      
      // Save the token to local storage
      localStorage.setItem('token', data.token);

      // Save the username to local storage
      localStorage.setItem('username', name);

      // Show success toast notification
      toast.success("Sign In successful");

      navigate('/profile');
    } catch (error) {
      console.error('Failed to fetch', error);
      toast.error("Incorrect Name or Password")
      // Set the error message
      setErrorMessage('Failed to sign in. Please try again.');
    }
  };


  
  const Sign_Up = () => {
    console.log('Signing Up with', name, password);
    navigate('/signup');
  };

  return (
    <div className="maincont">

      <div className='subcont'>
        <form className="nnp" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          {errorMessage && <p className='inc' id='inc'>{errorMessage}</p>} {/* Display error message */}
          <button type="submit" className="btn" onClick={() => setAction('signIn')}>
            Sign In
          </button>
          
          <p className='or'>OR</p>
          <button type="submit" className="btn" onClick={() => setAction('signUp')}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
