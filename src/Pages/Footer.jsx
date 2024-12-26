import React from 'react';
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
       
      <div>
        <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
  <h6 className="footer-title">About Our Project</h6>
<a className="link link-hover">Connect participants and organizers seamlessly.</a>
<a className="link link-hover">Manage marathon registrations effortlessly.</a>
<a className="link link-hover">Track events with a personal dashboard.</a>
<a className="link link-hover">Explore diverse marathon opportunities.</a>

<p className="text-sm mt-4">
      © {new Date().getFullYear()} Marathon Management System. All rights reserved.
    </p>

  </nav>
  <nav>
    <h6 className="footer-title">Marathon Management System</h6>
    <a className="link link-hover"><img className='h-40 w-40 rounded-full' src={logo} ></img> </a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

      </div>
    );
};

export default Footer;