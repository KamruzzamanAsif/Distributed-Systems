import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import logo from '../assets/linkedin-small-icon.png'; // Update the path to your image files
import homeIcon from '../assets/home-icon.svg'; // Update the path to your image files
import notificationIcon from '../assets/notification-icon.svg'; // Update the path to your image files

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow">
      <div className="flex items-center space-x-4">
        {/* Replace the logo image with your LinkedIn logo */}
        <Link to="/">
          <img src={logo} alt="linkedin-logo" className="h-8 w-8 cursor-pointer" />
        </Link>
      </div>

      {/* Center the home icon */}
      <Link to="/Home">
        <div className="flex justify-center items-center h-10 w-10 cursor-pointer absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <img src={homeIcon} alt="Home" className="h-10 w-10" />
        </div>
      </Link>

      {/* Center the notification icon */}
      <Link to="/notification">
        <div className="flex justify-center items-center h-10 w-10 cursor-pointer absolute right-1/3 transform translate-x-1/2 -translate-y-1/2">
          <img src={notificationIcon} alt="Notifications" className="h-9 w-10" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
