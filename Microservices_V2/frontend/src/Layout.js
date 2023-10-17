import React, { useState } from 'react';
import { BounceLoader } from 'react-spinners';
import Navbar from '../src/components/Navbar';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='mb-10'>
      {/* Pass the setLoading function to the Navbar */}
      <Navbar setLoading={setLoading} />

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          {/* <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"> */}
            <BounceLoader color="rgba(54, 84, 214, 1)" />
          {/* </div> */}
        </div>
      ) : (

        <main>{children}</main>

      )}
    </div>
  );
};

export default Layout;
