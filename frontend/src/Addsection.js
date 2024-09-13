import React, { useEffect, useState } from 'react';
import './Addsection.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Addsection = () => {
  const namee = localStorage.getItem('username');



  const [action, setAction] = useState('');
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [date, setAge] = useState('');
  const [link, setLink] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('')
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
    if (name === '' || address === ''||phonenumber===""||price === ''||link === '') {
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
      await fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },


        body: JSON.stringify({username: namee, name: name, address: address,phonenumber: phonenumber, price: price, link: link})
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
            <label htmlFor="name">Name of the Property:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="pass">Location: </label>
            <input type="text" id="pass" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="text" id="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            <label htmlFor='price'>Price:</label>
            <input type='text' id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor='price'>Link of the Image:</label>
            <input type='text' id='link' value={link}  onChange={(e) => setLink(e.target.value)} />
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
