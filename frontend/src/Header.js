import React from 'react';
import './Header.css';
import addicon from './files/add.png';
import usericon from './files/user.png';
import searchicon from './files/search.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const tosearch = async () => {
    navigate('/search');
  }

  const fetchProfile = async () => {
    const status = localStorage.getItem('token')
    if (status){
      navigate('/add');
    }
    else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div className='headerdiv'>
        <div className='samplebox'></div>
        <div className='samplebox'>
          <a href='/'><h1 className='tlheading'>PropLink</h1></a>
        </div>
        <div className='samplebox'></div>
        <div className='samplebox'>
          <a href='/'><h2>Home</h2></a>
        </div>
        
        <div className='samplebox'>
          <a href='/properties'><h2>Properties</h2></a>
        </div>
        <div className='samplebox'>
          <a href='/profile'><h2>Profile</h2></a>
        </div>
        
        
        <div className='samplebox'>
          <button onClick={fetchProfile} className='addpy'>Add Property</button>
        </div>
        <div className='samplebox'></div>
      </div>
    </div>
  );
};

export default Header;
