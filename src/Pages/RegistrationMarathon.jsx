import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../Component/AuthProvider';
import Swal from 'sweetalert2';

const RegistrationMarathon = () => {
    const {user}=useContext(AuthContex);
  const marathon = useLoaderData();
  const  {marathonTitle,marathonImage,location,startRegistrationDate,endRegistrationDate,marathonStartDate,_id}=marathon

  const handleSubmit=e=>{
    e.preventDefault();
    const email=e.target.email.value;
   
    const marathonStartDate=e.target.marathonStartDate.value;
    const firstName=e.target.firstName.value;
    const lastName=e.target.lastName.value;
    const contactNumber=e.target.contactNumber.value;
    const additionalInfo=e.target.additionalInfo.value;

    


    const regiesterData={
        email,
        marathonTitle,
        marathonStartDate,
        firstName,
        lastName,
        contactNumber,
        additionalInfo,
        marathonID:_id,

    }

    // console.table(regiesterData)



    
    fetch('http://localhost:5000/marathonsreg',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(regiesterData)

  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data);

      Swal.fire({
          title: "Successfully Register",
          text: "Successfully Register the Marathon",
          icon: "success"
        });
  })











    
  }
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Register for Marathon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="input input-bordered"
          />
        </div>

        {/* Marathon Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Title</span>
          </label>
          <input
          name=''
            type="text"
            value={marathonTitle}
            readOnly
            className="input input-bordered"
          />
        </div>

        {/* Marathon Start Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Start Date</span>
          </label>
          <input
          name='marathonStartDate'
            type="text"
            value={marathonStartDate}
            readOnly
            className="input input-bordered"
          />
        </div>

        {/* First Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="firstName"
           
           
            placeholder="Enter your first name"
            className="input input-bordered"
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lastName"
           
            placeholder="Enter your last name"
            className="input input-bordered"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input
            type="tel"
            name="contactNumber"
          
            placeholder="Enter your contact number"
            className="input input-bordered"
            required
          />
        </div>

        {/* Additional Info */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Additional Info</span>
          </label>
          <textarea
            name="additionalInfo"
           
            placeholder="Provide any additional information"
            className="textarea textarea-bordered"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationMarathon;
