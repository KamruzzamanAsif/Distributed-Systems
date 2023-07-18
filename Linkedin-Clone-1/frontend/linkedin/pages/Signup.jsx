import Image from 'next/image';
import logo from 'public/linkedin-logo.jpeg';
import React from 'react';

const Signup = () => {
    return(
    <div className='bg-gray-200 md:container h-screen w-screen'>
      <div className="container mx-auto">
        <Image src={logo} alt="linkedin-logo" height={500} width={150} />
      </div>

      <div className="bg-white shadow-md rounded-md mx-auto p-8 w-96">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-700">Sign up Now!</h1>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Email address"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign up
          </button>
          
        </div>
      </div>
    </div>
    );
}

export default Signup;