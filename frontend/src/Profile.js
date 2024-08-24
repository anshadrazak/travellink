
import React, { useEffect, useState } from 'react';
import './Rides.css'
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const namee = localStorage.getItem('username')

    const lg = async() => {
      localStorage.removeItem('username');
      navigate('/')
      
    }


  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('https://travellink.onrender.com/userprojects/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: namee})
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
      <div className='body'>
        
        <div className="projectsdiv">
        {projects.map((project) => (
  <div className="project1" key={project._id}>
    <div className="p1img">
      <img className="bbimg" src={project.transport} alt={project.destination} />
    </div>
    <div className="p1dets">
      <h1 className="p1heading">{project.from} to {project.to}</h1>
      <h2 className="p1tag">{project.date}</h2>
      <Link to={`/details/${project._id}`}><button className="p1btn">Details</button></Link>  {/* Use Link here */}
    </div>
  </div>
))}
      </div>
      <div className='btnct'>
      <button onClick={lg} className='lg'>Logout</button>
      </div>
      </div>

    );
  };
  
export default Profile