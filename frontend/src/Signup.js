import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Male');  // Default value set to 'Male'
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Add state for error message
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (name === '' || password === '' || gender === '' || age === '') {
      setErrorMessage('All fields are required');
      toast.error('All Fields are required')
      return;
    }
    if (action === 'signUp') {
      await Sign_Up();
    }
  };

  const Sign_Up = async () => {
    try {
      await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: name, password: password, age: age, gender: gender })
      });
      toast.success('Real Sign Up Succesful')
      
    } catch (error) {
      console.error('Failed to fetch', error);
    }navigate('/');
  };

  return (
    <div className='sibdy'>
    <div className="maincont">
      <div className='subcont'>
        <form className="nnp" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="gender">Gender:</label>
          <select id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
          {errorMessage && <p className='error'>{errorMessage}</p>} {/* Display error message */}
          <button type="submit" className="btn" onClick={() => setAction('signUp')}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
