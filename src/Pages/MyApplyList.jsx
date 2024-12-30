import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Component/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyApplyList = () => {
    const { loading, user } = useContext(AuthContex);
    const loadedApply = useLoaderData();
    const [regesteds, setregsteds] = useState([]);



    useEffect(() => {
        // Check if user is available and if the loaded data contains marathons for that email
        if (user?.email && Array.isArray(loadedApply)) {
            const userRegstion = loadedApply.filter(
                (reg) => reg.email === user.email // Filter based on user email
            );
            setregsteds(userRegstion); // Set filtered marathons
        } else {
            setregsteds([]); // Clear the list if no matching email
        }
    }, [user, loadedApply]); // Depend on both user and loadedMarathons





    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }



    // delete operation

    const handleDelet = id => {
        // console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {




                // for function
                // console.log(id);
                fetch(`http://localhost:5000/marathonsreg/${id}`, {
                    method: 'DELETE',

                })
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });


                           // Update the state by removing the deleted item
            const updatedMarathons = regesteds.filter((marathon) => marathon._id !== id);
            setregsteds(updatedMarathons);


                        }





                        console.log(data);
                    })







            }
        });
















    }





    return (
        <div>



            {/* for table */}



            <div>
                <h1>My Apply List: {regesteds.length}</h1>
                <ul>
                    {regesteds.length === 0 ? (
                        <li>No marathons found for you</li>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Serial</th>
                                        <th className="px-4 py-2 text-left">Title</th>

                                        <th className="px-4 w-5 py-2 text-left">Marathon Start Date</th>
                                        {/* <th className="px-4 py-2 text-left">End Registration Date</th> */}
                                        <th className="px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>

                                {

                                    regesteds.map((marathon, index) => (


                                        // jj

                                        <tr key={index} className="border-t">
                                            {/* 1 */}
                                            <td className="px-4 py-2 text-left">{index + 1}</td>
                                            {/* 2 */}
                                            <td className="px-4 w-10 py-2 text-left">{marathon.marathonTitle}</td>


                                            {/* 4 */}
                                            <td className="px-4 py-2 text-left text-gray-600">{marathon.marathonStartDate}</td>

                                            {/* <td className="px-4 py-2 text-left">{marathon.endRegistrationDate}</td> */}

                                            <td className="px-4 py-2 text-left">

                                                <Link to={`/updateregistrationmarathon/${marathon._id}`}>
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




            {/* table end */}


        </div>
    );
};

export default MyApplyList;