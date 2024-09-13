import React from 'react'
import './Sabout.css'
import about1 from './files/about1.jpg'
import dollar from './files/doller.png'
import trusted from './files/trusted.png'
import location from './files/location.png'
const Sabout = () => {
  return (
    <div className='maincnt4'>
        <div className='cnts4'>
            <div className='row1'>
                <div>
                    <p className='tl2'>Why Choose us</p>
                    <h1 className='hd4'>We Provide Latest Properties<br></br>For Our Valuable Clients.</h1>
                </div>
                <div>
                    <p className='tl42'>Huge number of propreties availabe here for buy, sell<br></br>and Rent. Also you find here co-living property so lots opportunity<br></br>you have to choose here and enjoy huge discount.</p>
                </div>
            </div>
            <div className='row1'>
                <div>
                    <img className='abtimg' src={about1}></img>
                </div>
                <div className='abct'>
                    <div className='oneft'>
                        <div><img src={dollar}></img></div>
                        <div>
                            <h2 className='abhd'>Budget Friendly</h2>
                            <p className='abp'>Properties are most budget friendly so you have opportunity to find the best one</p>
                        </div>
                    </div>
                    <div className='oneft'>
                        <div><img src={location}></img></div>
                        <div>
                            <h2 className='abhd'>Prime Location</h2>
                            <p className='abp'>Properties are most budget friendly so you have opportunity to find the best one</p>
                        </div>
                    </div>
                    <div className='oneft'>
                        <div><img src={trusted}></img></div>
                        <div>
                            <h2 className='abhd'>Trusted By Thousand</h2>
                            <p className='abp'>Properties are most budget friendly so you have opportunity to find the best one</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sabout