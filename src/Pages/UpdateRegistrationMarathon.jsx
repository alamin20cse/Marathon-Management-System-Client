import React from 'react';

const UpdateRegistrationMarathon = () => {

    const handleSubmit=id=>{
        console.log(id);
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
            // value={user?.email}
            // readOnly
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
            // value={marathonTitle}
            // readOnly
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
            // value={marathonStartDate}
            // readOnly
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
           Update  Register Now
          </button>
        </div>
      </form>
    </div>
    );
};

export default UpdateRegistrationMarathon;