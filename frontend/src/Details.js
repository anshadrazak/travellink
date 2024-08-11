import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';  // Add your CSS styling here

const Details = () => {
  const { id } = useParams();  // Get the id from URL parameters
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://travellink.onrender.com/details/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDetails(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='body_3'>
        <div className="details-container">
      <h1>From: {details.from}</h1>
      <h1>To: {details.to}</h1>

      <p>Date: {details.date}</p>
      <p>Gender: {details.gender}</p>
      <p>Phone Number: {details.phonenumber}</p>
      <p>Time: {details.time}</p>
      <a href={`https://wa.me/${details.phonenumber}`} target="_blank"><btn>Contact</btn></a>
      {/* Add more fields as necessary */}
    </div>
    </div>
  );
};

export default Details;
