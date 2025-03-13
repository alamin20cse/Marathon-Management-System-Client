import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-2">
            About Our Project
          </h6>
          <p className="text-sm">Connect participants and organizers seamlessly.</p>
          <p className="text-sm">Manage marathon registrations effortlessly.</p>
          <p className="text-sm">Track events with a personal dashboard.</p>
          <p className="text-sm">Explore diverse marathon opportunities.</p>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} Marathon Management System. All rights
            reserved.
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <h6 className="text-lg font-semibold text-white mb-2">
            Marathon Management System
          </h6>
          <img className="h-28 w-28 rounded-full border border-gray-400" src={logo} alt="Logo" />
        </div>

        {/* Legal Section */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-2">Quick link</h6>
          <a href="/#success" className="block text-sm hover:text-gray-400">success Stories</a>
          <a href="/#Fitness" className="block text-sm hover:text-gray-400">Fitness Tips </a>
          <a href="/#" className="block text-sm hover:text-gray-400">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
