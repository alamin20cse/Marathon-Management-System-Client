import React, { useContext, useEffect, useState } from 'react';
import MarathonsPageCard from './MarathonsPageCard';
import { AuthContex } from '../Component/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const MarathonsPage = () => {
  const [loadedMarathons, setLoadedMarathons] = useState([]);
  const { loading, logOut } = useContext(AuthContex);
  const [loaddata, setLoaddata] = useState(true);
  const [sort, setSort] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://marathon-management-system-server-theta.vercel.app/marathons?sort=${sort}`, {
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
          navigate('/login');
          return;
        }
        return res.json();
      })
      .then((data) => {
        setLoadedMarathons(data);
        setLoaddata(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [sort, logOut, navigate]);

  useEffect(() => {
    document.title = 'Marathon Page';
  }, []);

  if (loading || loaddata) {
    return <Loading />;
  }

  return (
    <div className='pt-16 min-h-screen'>
      <div className='py-4'>
        <h1 className='py-4'>All Marathons: {loadedMarathons.length}</h1>
        <button className="btn mr-2" onClick={() => setSort('asc')}>
          Sort Oldest Created
        </button>
        <button className="btn" onClick={() => setSort('desc')}>
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