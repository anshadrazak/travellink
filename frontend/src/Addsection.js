import React, { useEffect, useState } from 'react';
import './Addsection.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Addsection = () => {
  const namee = localStorage.getItem('username');



  const [action, setAction] = useState('');
  const [from, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [time, setTime] = useState('');
  const [to, setPassword] = useState('');
  const [gender, setGender] = useState('Male');  // Default value set to 'Male'
  const [transport, setTransport] = useState('https://i.ibb.co/4TJ2pfY/train.png');
  const [date, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Add state for error message
  const navigate = useNavigate();


  useEffect(()=> {
    const fetchProfile = async () => {
      const token = localStorage.getItem('username');
      
      if (!token) {
        navigate("/login");
      }
    };

    fetchProfile();
  })

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (from === '' || to === '' || gender === '' || date === ''||transport === ''||phonenumber===""||time === "") {
      setErrorMessage('All fields are required');
      toast.error('All Fields are required')
      return;
    }
    if (action === 'signUp') {
      await add();
    }
  };

  const add = async () => {
    try {
      await fetch('https://travellink.onrender.com/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },


        body: JSON.stringify({username: namee, from: from, to: to, date: date, gender: gender, transport: transport, phonenumber: phonenumber, time: time})
      });
      toast.success('Added Succesful')
      navigate('/');
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };

  return (
    <div className='body2'>
        <div className="maincont">
        <div className='subcont'>
            <form className="nnp" onSubmit={handleFormSubmit}>
            <label htmlFor="name">From:</label>
            <input type="text" id="name" value={from} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="pass">To:</label>
            <input type="text" id="pass" value={to} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="gender">Gender:</label>
            <select id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="text" id="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            <label htmlFor="transport">Transport:</label>
            <select id='transport' value={transport} onChange={(e) => setTransport(e.target.value)}>
                <option value='https://i.ibb.co/4TJ2pfY/train.png'>train</option>
                <option value='https://i.ibb.co/cw3ZT5s/sedan-1-Large.png'>Car</option>
                <option value='https://i.ibb.co/QdbrBps/bus.png'>Bus</option>
                <option value='https://i.ibb.co/WBffV7X/motorcycle.png'>Bike</option>
            </select>
            <label htmlFor="age">Date:</label>
            <input type="date" id="age" value={date} onChange={(e) => setAge(e.target.value)}/>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}/>
            {errorMessage && <p className='error'>{errorMessage}</p>} {/* Display error message */}
            <button type="submit" className="btn" onClick={() => setAction('signUp')}>
                ADD
            </button>
            </form>
        </div>
        </div>
    </div>
  );
}

export default Addsection;
