import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContex } from '../Component/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMarathon = () => {
  const { user } = useContext(AuthContex);
  const loadedMarathon = useLoaderData();




  // Initialize states with loadedMarathon values
  const [startRegistrationDate, setStartRegistrationDate] = useState(
    loadedMarathon?.startRegistrationDate ? new Date(loadedMarathon.startRegistrationDate) : null
  );
  const [endRegistrationDate, setEndRegistrationDate] = useState(
    loadedMarathon?.endRegistrationDate ? new Date(loadedMarathon.endRegistrationDate) : null
  );
  const [marathonStartDate, setMarathonStartDate] = useState(
    loadedMarathon?.marathonStartDate ? new Date(loadedMarathon.marathonStartDate) : null
  );
  const [runningDistance, setRunningDistance] = useState(loadedMarathon?.runningDistance || '25k');

   useEffect(()=>{
  
          document.title='Update Marathon';
        })



  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMarathon = {
      marathonTitle: e.target.marathonTitle.value,
      startRegistrationDate,
      endRegistrationDate,
      marathonStartDate,
      location: e.target.location.value,
      runningDistance,
      description: e.target.description.value,
      marathonImage: e.target.marathonImage.value,
      updatedAt: new Date(),
      email: user.email,
    };

    console.log('Updated Marathon Details:', updatedMarathon);


    fetch(`http://localhost:5000/marathons/${loadedMarathon._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMarathon),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Updated',
              text: 'Successfully updated the campaign',
              icon: 'success',
            });
            // navigate('/mycampaign');
          }
        })
        .catch((err) => {
          console.error('Error updating campaign:', err);
          Swal.fire({
            title: 'Error',
            text: 'Failed to update the campaign. Please try again.',
            icon: 'error',
          });
        });














  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Update Marathon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Title</span>
          </label>
          <input
            type="text"
            name="marathonTitle"
            defaultValue={loadedMarathon?.marathonTitle}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Start Registration Date</span>
          </label>
          <DatePicker
            selected={startRegistrationDate}
            onChange={(date) => setStartRegistrationDate(date)}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">End Registration Date</span>
          </label>
          <DatePicker
            selected={endRegistrationDate}
            onChange={(date) => setEndRegistrationDate(date)}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Start Date</span>
          </label>
          <DatePicker
            selected={marathonStartDate}
            onChange={(date) => setMarathonStartDate(date)}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            defaultValue={loadedMarathon?.location}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Running Distance</span>
          </label>
          <select
            value={runningDistance}
            onChange={(e) => setRunningDistance(e.target.value)}
            className="select select-bordered"
          >
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            defaultValue={loadedMarathon?.description}
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Image</span>
          </label>
          <input
            type="text"
            name="marathonImage"
            defaultValue={loadedMarathon?.marathonImage}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Update Marathon
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMarathon;
