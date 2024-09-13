import React from 'react'
import img1 from './files/img1.jpeg'
import img2 from './files/img2.jpeg'

const Featured = () => {
  return (
    <div className='main2'>
        <div className='cnts2'>
            <p className='tl2'>Best Chooses</p>
            <h1 className='hd2'>Featured Properties</h1>
            <div>
            <div className='cards'>
                
                <div className='card'>
                    <img className='cardimgs' src={img1}>

                    </img>
                    <h3 className='phd'>Orchid Casel de Paradise.</h3>
                    <p className='location'>Phagwara Punjav</p>
                    <hr></hr>
                    <p className='price'>Price: $125000</p>
                </div>
                <div className='card'>
                    <img className='cardimgs' src={img2}>

                    </img>
                    <h3 className='phd'>Ruposibangla de parlosia.</h3>
                    <p className='location'>Phagwara Punjav</p>
                    <hr></hr>
                    <p className='price'>Price: $125000</p>
                </div>
                <div className='card'>
                    <img className='cardimgs' src={img1}>

                    </img>
                    <h3 className='phd'>Sinomen Studio Palace.</h3>
                    <p className='location'>Phagwara Punjav</p>
                    <hr></hr>
                    <p className='price'>Price: $125000</p>
                </div>
                </div>

            </div>
            <div className='cards'>
                
                <div className='card'>
                    <img className='cardimgs' src={img1}>

                    </img>
                    <h3 className='phd'>Orchid Casel de Paradise.</h3>
                    <p className='location'>Phagwara Punjav</p>
                    <hr></hr>
                    <p className='price'>Price: $125000</p>
                </div>
                <div className='card'>
                    <img className='cardimgs' src={img2}>

                    </img>
                    <h3 className='phd'>Ruposibangla de parlosia.</h3>
                    <p className='location'>Phagwara Punjav</p>
                    <hr></hr>
                    <p className='price'>Price: $125000</p>
                </div>
                <div className='card'>
                    <img className='cardimgs' src={img1}>

                    </img>
                    <h3 className='phd'>Sinomen Studio Palace.</h3>
                    <p className='location'>Phagwara Punjav</p>
                    <hr></hr>
                    <p className='price'>Price: $125000</p>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default Featured