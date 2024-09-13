import React, { useEffect, useRef } from 'react';
import './Design.css';
import fr from './files/dfr.png';

const Design = () => {
  const frRef = useRef(null);

  useEffect(() => {
    const frElement = frRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            frElement.classList.add('slidein-animation');
          } else {
            frElement.classList.remove('slidein-animation'); // Optional: Reset animation when out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (frElement) {
      observer.observe(frElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (frElement) {
        observer.unobserve(frElement);
      }
    };
  }, []);

  return (
    <div className='mmainbg'>
      <img ref={frRef} className='fr' src={fr} alt="Property" />
      <div className='txtcnts'>
        <p className='tl'>A new way to find Properties</p>
        <h1 className='hd1'>
          Find Your Most
          <br />
          Suitable Property
        </h1>
        <p className='tl'>
          Huge number of properties available here for buy, and sell also u
          <br />
          can find here co-living property. So you have lots of opportunity
        </p>
        <button className='btnbtn'>Contact Us</button>
      </div>
    </div>
  );
};

export default Design;
