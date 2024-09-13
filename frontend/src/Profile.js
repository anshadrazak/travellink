
import React, { useEffect, useState } from 'react';
import './Rides.css'
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img1 from './files/img1.jpeg'

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
            navigate('/login')
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
                <div className='card'>
                <img className='cardimgs' src={project.link}>

                </img>
                <h3 className='phd'>{project.name}</h3>
                <p className='location'>{project.address}</p>
                <hr></hr>
                <p className='price'>Price: ${project.price}</p>
            </div>
))}
      </div>
      <div className='btndiv'>
      <button onClick={lg} className='lg'>Logout</button>
      </div>
      </div>

    );
  };
  
export default Profile