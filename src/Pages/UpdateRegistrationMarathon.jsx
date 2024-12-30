import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../Component/AuthProvider';

const UpdateRegistrationMarathon = () => {
    const loadedData=useLoaderData();
    const {user,loading}=useContext(AuthContex);
    console.log(loadedData);

    
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }


    const handleSubmit=e=>{
      e.preventDefault();
      const email=e.target.email.value;
      const marathonTitle=e.target.marathonTitle.value;
      const marathonStartDate=e.target.marathonStartDate.value;
      const firstName=e.target.firstName.value;
      const lastName=e.target.lastName.value;
      const contactNumber=e.target.contactNumber.value;
      const additionalInfo=e.target.additionalInfo.value;


      const newData={
        email,
        marathonTitle,
        marathonStartDate,
        firstName,
        lastName,
        contactNumber,
        additionalInfo,
      }
     console.table(newData);


    }
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Update Register for Marathon</h2>
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
          name='marathonTitle'
            type="text"
            value={loadedData.marathonTitle}
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
            value={loadedData.marathonStartDate}
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
           
           
           defaultValue={loadedData.firstName}
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
           defaultValue={loadedData.lastName}
           
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
          
          defaultValue={loadedData.contactNumber}
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
           
          defaultValue={loadedData.additionalInfo}
            className="textarea textarea-bordered"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
           Update  Register Now
          </button>
        </div>
      </form>
    </div>
    );
};

export default UpdateRegistrationMarathon;