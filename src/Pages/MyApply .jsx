import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Component/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import MyApplyCard from './MyApplyCard';

const MyApply = () => {
  const { loading, user, logOut } = useContext(AuthContex); // Get user and other context values
  const [loadedApply, setLoadedApply] = useState([]); // All registrations
  const [regesteds, setRegsteds] = useState([]); // User-specific registrations
  const navigate = useNavigate(); // Navigate for unauthorized access

  // Fetch registration data
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await fetch(`http://localhost:5000/marathonsreg`, {
          credentials: 'include',
        });

        if (res.status === 401 || res.status === 403) {
          logOut();
          navigate('/login');
          return;
        }

        const data = await res.json();
        setLoadedApply(data);
      } catch (error) {
        console.error('Error fetching registrations:', error.message);
      }
    };

    fetchRegistrations();
  }, [logOut, navigate]);

  // Filter user-specific registrations
  useEffect(() => {
    document.title = 'My Apply List'; // Set page title

    if (user?.email && Array.isArray(loadedApply)) {
      const userRegistration = loadedApply.filter(
        (reg) => reg.email === user.email // Match by user email
      );
      setRegsteds(userRegistration); // Update state with filtered registrations
    } else {
      setRegsteds([]); // Reset to empty if no matching data
    }
  }, [user, loadedApply]);

  // Loading spinner
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  // Handle delete functionality
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/marathonsreg/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.deletedCount) {
        console.log(`Successfully deleted registration with ID: ${id}`);
        setRegsteds((prev) => prev.filter((reg) => reg._id !== id)); // Remove deleted item
      }
    } catch (error) {
      console.error('Error deleting registration:', error.message);
    }
  };

  return (
    <div>
      <h1>Total Registrations: {regesteds.length}</h1>

      <div>
        {regesteds.length === 0 ? (
          <p>No registrations found</p>
        ) : (
          regesteds.map((apply) => (
            <MyApplyCard
              key={apply._id}
              apply={apply}
              handleDelete={handleDelete} // Pass delete handler to the card
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyApply;
