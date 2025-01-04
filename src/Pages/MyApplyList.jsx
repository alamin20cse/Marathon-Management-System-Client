import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Component/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyApplyList = () => {
  const { loading, user, logOut } = useContext(AuthContex);
  const [regesteds, setRegesteds] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Fetch registrations
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await fetch(`http://localhost:5000/marathonsreg?search=${search}`, {
          credentials: 'include',
        });

        if (res.status === 401 || res.status === 403) {
          logOut();
          navigate('/login');
          return;
        }

        const data = await res.json();
        if (user?.email) {
          const userRegistrations = data.filter((reg) => reg.email === user.email);
          setRegesteds(userRegistrations);
        } else {
          setRegesteds([]);
        }
      } catch (err) {
        console.error('Error fetching registrations:', err);
      }
    };

    fetchRegistrations();
  }, [user, search, logOut, navigate]);

  // Update page title
  useEffect(() => {
    document.title = 'My Apply List';
  }, []);

  // Handle delete action
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/marathonsreg/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              setRegesteds((prev) => prev.filter((marathon) => marathon._id !== id));
            }
          })
          .catch((err) => console.error('Error deleting registration:', err));
      }
    });
  };

  // Render loading spinner
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  // Render component
  return (
    <div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(e.target.elements.searchInput.value);
        }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="searchInput"
            className="grow"
            placeholder="Search"
            aria-label="Search marathons"
          />
        </label>
        <button className="btn" type="submit">
          Search
        </button>
      </form>

      {regesteds.length === 0 ? (
        <p className="mt-4">No marathons found for you</p>
      ) : (
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Serial</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Marathon Start Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {regesteds.map((marathon, index) => (
                <tr key={marathon._id} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{marathon.marathonTitle}</td>
                  <td className="px-4 py-2">
                    {new Date(marathon.marathonStartDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <Link to={`/updateregistrationmarathon/${marathon._id}`}>
                      <button className="btn btn-primary mr-2">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(marathon._id)}
                      className="btn btn-secondary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyApplyList;
