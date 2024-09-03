
import React, { useEffect, useState } from 'react';
import './Rides.css'
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [curitem, setCuritem] = useState();
    const navigate = useNavigate();
    const namee = localStorage.getItem('username')

    const lg = async() => {
      localStorage.removeItem('username');
      navigate('/')
      
    }

    const deleting = async() => {
      setCuritem(projects._id);

      try{
        const response = await fetch('http://localhost:5000/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({_id: curitem})
        })
      } catch {

      }


    }


  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('http://localhost:5000/userprojects/', {
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
          return(
            <div>No Rides Found</div>
          )
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
      <Link to={`/details/${project._id}`}><button className="p1btn">Details</button></Link>  {/* Use Link here */}<br></br>
      {}
      <button onClick={deleting}>Delete</button>
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