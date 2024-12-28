import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { AuthContex } from '../Component/AuthProvider';

const AddMarathons = () => {
    const {user}=useContext(AuthContex);
  const [startRegistrationDate, setStartRegistrationDate] = useState(null);
  const [endRegistrationDate, setEndRegistrationDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);
  const [runningDistance, setRunningDistance] = useState('25k');

  const handleSubmit = (e) => {
    e.preventDefault();


    


    

    const marathons = {
      marathonTitle: e.target.marathonTitle.value,
      startRegistrationDate,
      endRegistrationDate,
      marathonStartDate,
      location: e.target.location.value,
      runningDistance,
      description: e.target.description.value,
      marathonImage: e.target.marathonImage.value,
      createdAt: new Date(),
      email:user.email,
      totalRegistrationCount: 0,
    };

    console.log('Marathon Details:', marathons);

    fetch('http://localhost:5000/marathons',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(marathons)

    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);

        Swal.fire({
            title: "Success",
            text: "Successfully added the Marathon",
            icon: "success"
          });
    })










  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Marathon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Title</span>
          </label>
          <input
            type="text"
            name="marathonTitle"
            placeholder="Marathon Title"
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
            placeholderText="Select Start Registration Date"
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
            placeholderText="Select End Registration Date"
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
            placeholderText="Select Marathon Start Date"
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
            placeholder="Location"
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
            placeholder="Description"
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
            placeholder="Image URL"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Add Marathon
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMarathons;
