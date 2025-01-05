
    // useEffect(() => {
    //     // Fetch all marathons only if the user is logged in
    //     if (user?.email) {
    //         fetchAllMyMarathon();
    //     }
    // }, [user]); // Run on user change

    // const fetchAllMyMarathon = async () => {
    //     try {
    //         const response = await axios.get(`https://marathon-management-system-server-theta.vercel.app/marathons/${user?.email}`);
    //         setMymarathon(response.data); // Set the fetched data to the state
    //     } catch (err) {
    //         console.error('Error fetching data:', err.message);
    //     }
    // };

    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`https://marathon-management-system-server-theta.vercel.app/marathons/${user.email}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log('Fetched marathons:', data);
    //                 setMymarathon(data); // Store the data in state
    //             })
    //             .catch((err) => {
    //                 console.error('Error fetching marathons:', err.message);
    //             });
    //     }
    // }, [user]);
    
   








    
    import React, { useContext, useEffect, useState } from 'react';
    import { AuthContex } from '../Component/AuthProvider';
    import { Link, useNavigate } from 'react-router-dom';
    import Swal from 'sweetalert2';
    
    const MyMarathonsList = () => {
      const { user, loading, logOut } = useContext(AuthContex); // Get user context
      const [loadedMarathons, setLoadedMarathons] = useState([]); // All marathons
      const [mymarathon, setMymarathon] = useState([]); // User-specific marathons
      const navigate = useNavigate(); // Navigation for redirects
    
      // Fetch all marathons on component mount
      useEffect(() => {
        const fetchMarathons = async () => {
          try {
            const res = await fetch(`https://marathon-management-system-server-theta.vercel.app/marathons`, { credentials: 'include' });
    
            if (res.status === 401 || res.status === 403) {
              logOut();
              navigate('/login');
              return;
            }
    
            const data = await res.json();
            if (Array.isArray(data)) {
              setLoadedMarathons(data);
            } else {
              console.error('Unexpected response format:', data);
              setLoadedMarathons([]); // Reset to empty array if invalid data
            }
          } catch (error) {
            console.error('Error fetching all marathons:', error.message);
          }
        };
    
        fetchMarathons();
      }, [logOut, navigate]);
    
      // Filter user-specific marathons
      useEffect(() => {
        if (user?.email) {
          const userMarathons = loadedMarathons.filter(
            (marathon) => marathon.email === user.email
          );
          setMymarathon(userMarathons);
        }
      }, [user, loadedMarathons]);
    
      // Handle loading state
      if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
      }
    
      // Delete a marathon
      const handleDelete = async (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const res = await fetch(`https://marathon-management-system-server-theta.vercel.app/marathons/${id}`, {
                method: 'DELETE',
              });
              const data = await res.json();
              if (data.deletedCount) {
                Swal.fire('Deleted!', 'The marathon has been deleted.', 'success');
                setMymarathon((prev) => prev.filter((marathon) => marathon._id !== id));
              }
            } catch (error) {
              console.error('Error deleting marathon:', error.message);
            }
          }
        });
      };
    
      return (
        <div>
          <h1 className="text-2xl font-semibold mb-4">My Marathons List: {mymarathon.length}</h1>
          {mymarathon.length === 0 ? (
            <p className="text-gray-500">No marathons found for you.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Serial</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 py-2 text-left">Start Registration Date</th>
                    <th className="px-4 py-2 text-left">End Registration Date</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mymarathon.map((marathon, index) => (
                    <tr key={marathon._id} className="border-t">
                      <td className="px-4 py-2 text-left">{index + 1}</td>
                      <td className="px-4 py-2 text-left">{marathon.marathonTitle}</td>
                      <td className="px-4 py-2 text-left">
                        <img
                          src={marathon.marathonImage}
                          alt={marathon.marathonTitle}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </td>
                      <td className="px-4 py-2 text-left">{marathon.startRegistrationDate}</td>
                      <td className="px-4 py-2 text-left">{marathon.endRegistrationDate}</td>
                      <td className="px-4 py-2 text-left">
                        <Link to={`/updatemarathon/${marathon._id}`}>
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
    
    export default MyMarathonsList;
    