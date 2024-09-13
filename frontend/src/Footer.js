import React from 'react'
import './Footer.css'
import img from './files/dfr.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img className='fimg' src={img}></img>
        <div className='textcont'>
            <h1 className='fhd'>Are you a Home Owner?</h1>
            <p className='tl2'>Put your email address and get listed.</p>
            <br></br>
            <div className='inph'><input className='inp' placeholder='Enter Your Email Here....'>
            </input>
            <button className='glbtn'>Get listed</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer