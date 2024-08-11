import React, { useEffect, useState } from 'react';
import './Header.css'
import addicon from './files/add.png';
import searchicon from './files/search.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {

  return (
    <div>
        <div className='headerdiv'>
            <div className='samplebox'></div>
            <a href='/'><h1 className='tlheading'>TravelLink</h1></a>
            <div className='samplebox2'>
              
              <img className='searchicon' src={searchicon}></img>
            </div>
            <div className='samplebox'>
              <a href='add'><img className='addicon' src={addicon}></img></a>
            </div>
            <div className='samplebox'></div>
            <div className='samplebox'></div>
            <div className='samplebox'></div>


        </div>
    </div>
  )
}

export default Header