import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/linkedin-small-icon.png'; // Assuming you have the LinkedIn logo image available
import homeIcon from 'public/home-icon.svg'; // Replace with the path to your home icon SVG
import notificationIcon from 'public/notification-icon.svg'; // Replace with the path to your notification icon SVG

const Navbar = () => {
  return (  
    <nav className="bg-white p-4 flex items-center justify-between shadow">
      <div className="flex items-center space-x-4">
        {/* Replace the logo image with your LinkedIn logo */}
        <Link href="/" passHref>
          <Image src={logo} alt="linkedin-logo" className="h-8 w-8 cursor-pointer" />
        </Link>
      </div>

      {/* Center the home icon */}
      <Link href="/" passHref>
        <div className="flex justify-center items-center h-10 w-10 cursor-pointer absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={homeIcon} alt="Home" className="h-10 w-10" />
        </div>
      </Link>

      {/* Center the notification icon */}
      <Link href="/notifications" passHref>
        <div className="flex justify-center items-center h-10 w-10 cursor-pointer absolute right-1/3 transform translate-x-1/2 -translate-y-1/2">
          <Image src={notificationIcon} alt="Notifications" className="h-9 w-10" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
