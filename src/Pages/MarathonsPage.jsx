import React, { useContext, useEffect, useState } from 'react';
import MarathonsPageCard from './MarathonsPageCard';
import { AuthContex } from '../Component/AuthProvider';

const MarathonsPage = () => {
  const [loadedMarathons, setLoadedMarathons] = useState([]);
  const { loading } = useContext(AuthContex);
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/marathons?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setLoadedMarathons(data));
  }, [sort]); // Include `sort` as a dependency

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
          Sort Oldest created
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
          <MarathonsPageCard key={marathon._id} marathon={marathon}></MarathonsPageCard>
        ))}
      </div>
    </div>
  );
};

export default MarathonsPage;
