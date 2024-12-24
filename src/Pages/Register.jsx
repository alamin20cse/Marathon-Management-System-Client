import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const Register = () => {


    const passwordRegex =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

   
    const handleRegister=(e)=>{
      e.preventDefault();
      const name=e.target.name.value;
      const email=e.target.email.value;
      const photo=e.target.photo.value;
      const password=e.target.password.value;

      console.log(name,email,photo,password);
  
  
  
       
      if (!passwordRegex.test(password)) {
        Swal.fire('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
        
        return;
    }


}









    return (
        <div className="container  mx-auto hero min-h-screen flex flex-col gap-4 lg:flex-row-reverse">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-base-200">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eum, dolores exercitationem repudiandae iure quod harum ipsum fugit tenetur illum quam et hic veritatis fugiat tempora omnis dolor, consequuntur inventore.
                </p>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-base-200">
                <ToastContainer />
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" aria-label="Enter your name" required />
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" aria-label="Enter your email" required />
                            </div>

                            {/* Photo URL Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" aria-label="Enter the photo URL" required />
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" aria-label="Enter your password" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" aria-label="Register your account">Register</button>
                            </div>
                        </form>
                        <p>
                            Already have an Account?{' '}
                            <Link className="text-red-400" to="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
