
    // useEffect(() => {
    //     // Fetch all marathons only if the user is logged in
    //     if (user?.email) {
    //         fetchAllMyMarathon();
    //     }
    // }, [user]); // Run on user change

    // const fetchAllMyMarathon = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:5000/marathons/${user?.email}`);
    //         setMymarathon(response.data); // Set the fetched data to the state
    //     } catch (err) {
    //         console.error('Error fetching data:', err.message);
    //     }
    // };

    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`http://localhost:5000/marathons/${user.email}`)
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
    import { Link, useLoaderData } from 'react-router-dom';
    
    const MyMarathonsList = () => {
      const { user } = useContext(AuthContex); // Get user from AuthContext
      const loadedMarathons = useLoaderData(); // Data passed from loader
      const [mymarathon, setMymarathon] = useState([]); // State to hold the list of marathons
    
      useEffect(() => {
        // Check if user is available and if the loaded data contains marathons for that email
        if (user?.email && Array.isArray(loadedMarathons)) {
          const userMarathons = loadedMarathons.filter(
            (marathon) => marathon.email === user.email // Filter based on user email
          );
          setMymarathon(userMarathons); // Set filtered marathons
        } else {
          setMymarathon([]); // Clear the list if no matching email
        }
      }, [user, loadedMarathons]); // Depend on both user and loadedMarathons
    
      const {marathonTitle,marathonImage,location,startRegistrationDate,endRegistrationDate,_id}=mymarathon;
      // Loading state when user data is unavailable
      if (!user) {
        return <span className="loading loading-spinner loading-lg"></span>;
      }
    
      return (
        <div>
          <h1>My List: {mymarathon.length}</h1>
          <ul>
            {mymarathon.length === 0 ? (
              <li>No marathons found for you</li>
            ) : (
              <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Serial</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 w-5 py-2 text-left">Start Registration Date</th>
                    <th className="px-4 py-2 text-left">End Registration Date</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>

                {
                  
                  mymarathon.map((marathon, index) => (


// jj

<tr key={index} className="border-t">
{/* 1 */}
<td className="px-4 py-2 text-left">{index + 1}</td>
{/* 2 */}
<td className="px-4 w-10 py-2 text-left">{marathon.marathonTitle}</td>

{/* 3 */}
<td className="px-4 py-2 text-left">
  <img
    src={marathon.marathonImage}
    alt={marathon.marathonTitle}
    className="h-16 w-16 rounded-full object-cover"
  />
</td>

{/* 4 */}
<td className="px-4 py-2 text-left text-gray-600">{marathon.startRegistrationDate}</td>

<td className="px-4 py-2 text-left">{marathon.endRegistrationDate}</td>

<td className="px-4 py-2 text-left">

  <Link to={`/updatecampaigns/${marathon._id}`}>
    <button className="btn btn-primary mr-2">Update</button>

  </Link>
  <button onClick={() => handleDelet(marathon._id)} className="btn btn-secondary">Delete</button>
</td>
</tr>

// jj







                   
                  ))
                }
              
              </table>
            </div>
              



          




            )}
          </ul>
        </div>
      );
    };
    
    export default MyMarathonsList;
    