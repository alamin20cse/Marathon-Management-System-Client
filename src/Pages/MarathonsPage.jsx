import React, { useContext, useEffect, useState } from 'react';
import MarathonsPageCard from './MarathonsPageCard';
import { AuthContex } from '../Component/AuthProvider';
import { useNavigate } from 'react-router-dom'; // Add this if you are using navigate

const MarathonsPage = () => {
  const [loadedMarathons, setLoadedMarathons] = useState([]);
  const { loading, logOut } = useContext(AuthContex);
  const [sort, setSort] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    fetch(`http://localhost:5000/marathons?sort=${sort}`, {
      credentials: 'include', // Move credentials inside fetch options
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
          navigate('/login'); // Redirect to login page if unauthorized
          return;
        }
        return res.json(); // Return JSON data
      })
      .then((data) => setLoadedMarathons(data))
      .catch((error) => console.error('Error fetching data:', error)); // Catch any fetch errors
  }, [sort, logOut, navigate]); // Add logOut and navigate as dependencies

  useEffect(() => {
    document.title = 'Marathon Page';
  }, []);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div>
      <div>
        <h1>All Marathons: {loadedMarathons.length}</h1>
        <button
          className="btn mr-2"
          onClick={() => setSort('asc')}
        >
          Sort Oldest Created
        </button>
        <button
          className="btn"
          onClick={() => setSort('desc')}
        >
          Sort Newest Created
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2">
        {loadedMarathons.map((marathon) => (
          <MarathonsPageCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default MarathonsPage;
