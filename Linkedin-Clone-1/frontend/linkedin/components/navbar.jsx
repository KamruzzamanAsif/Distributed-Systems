import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/linkedin-small-icon.png';

const Navbar = () => {
  return (
    <nav className="bg-[#f4f4f5] p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="linkedin-logo" className='h-8 w-8'/>

        <div className='pl-80'>
            <Link href="/" className="text-[#292524] font-bold text-xl">
            Home
            </Link>
        </div>

        <div className='pl-80'>
            <Link href="/notifications" className="text-[#292524] font-bold text-xl">
            Notifications
            </Link>
        </div>
    
      </div>
    </nav>
  );
};

export default Navbar;
