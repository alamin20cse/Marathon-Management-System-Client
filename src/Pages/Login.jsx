import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Login = () => {


    
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
    }




    return (
        <div className='hero min-h-screen flex flex-col gap-4 lg:flex-row-reverse'>
    
            {/* dfsdf */}
            <div className='w-full lg:w-1/2 flex items-center justify-center bg-base-200'>
    
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maiores architecto aliquam maxime fugit accusamus cum ratione ullam, placeat dicta voluptas ipsa voluptate corrupti, possimus iusto quaerat officia qui? Tempore!</h1>
    
          </div>
    
    
    
    
    {/* another */}
    
          <div className='w-full lg:w-1/2 flex items-center justify-center bg-base-200'>
          <div className=" bg-base-200 min-h-screen">
             
            <ToastContainer></ToastContainer>
       <div className="hero-content flex-col">
         <div className="text-center lg:text-left">
           <h1 className="text-5xl font-bold">Login now!</h1>
          
         </div>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


           <form onSubmit={handleLogin}  className="card-body">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input type="email"name='email' placeholder="email" className="input input-bordered" required />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input type="password" name='password' placeholder="password" className="input input-bordered" required />
               <label className="label">
                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
               </label>
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
             </div>
           </form>
           <button  className='btn btn-primary'>Login with Google</button>
           <p>Are you New? <Link className='text-red-400' to='/register'>Regiester</Link> </p>
     
         </div>
       </div>
     </div>
    
    
          </div>
        
    
    
    
        </div>
        );
};

export default Login;