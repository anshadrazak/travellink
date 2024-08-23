import React from 'react';
import './Header.css';
import addicon from './files/add.png';
import usericon from './files/user.png';
import searchicon from './files/search.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

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
        <a href='/'><h1 className='tlheading'>TravelLink</h1></a>
        <div className='samplebox2'>
          <img className='searchicon' src={searchicon} alt="Search" />
        </div>
        <div className='samplebox'>
          <a onClick={fetchProfile}><img className='addicon' src={addicon} alt="Add" /></a>
        </div>
        <div className='samplebox'>
          <a href='/profile'><img className='addicon' src={usericon}></img></a>
        </div>
        <div className='samplebox'></div>
        <div className='samplebox'></div>
      </div>
    </div>
  );
};

export default Header;
