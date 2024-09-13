
import React, { useEffect, useState } from 'react';
import './Rides.css'
import { Link } from 'react-router-dom';
import img1 from './files/img1.jpeg'
import Header from './Header';

const Rides = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('http://localhost:5000/projects/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setProjects(data);
        } catch (error) {
          setError(error.message);
          console.error("Error fetching projects:", error);
          alert("Error fetching projects. Check the console for more details.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProjects();
    }, []);
  

  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <Header/>
      <div className='body'>
        <div className='rbdy'>
        <div className="projectsdiv">
        {projects.map((project) => (
                <div className='card'>
                <img className='cardimgs' src={project.link}>

                </img>
                <h3 className='phd'>{project.name}</h3>
                <p className='location'>{project.address}</p>
                <hr></hr>
                <p className='price'>Price: ${project.price}</p>
                <a href={`/details/${project._id}`}><button className='p1btn'>Details</button></a>
            </div>
            
            
  
))}
      </div>
      </div>
      </div>
      </div>
    );
  };
  
export default Rides