import React from 'react'
import Header from './Header'
import Rides from './Rides'
import Design from './Design'
import Best from './Best'
import Sabout from './Sabout'
import Featured from './Featured'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Design/>
        <Best/>
        <Sabout/>
        <Featured/>
        <Footer/>
    </div>
  )
}

export default Homepage