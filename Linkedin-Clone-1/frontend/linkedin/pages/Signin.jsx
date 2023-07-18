import Image from 'next/image';
import logo from 'public/linkedin-logo.jpeg';
import React from 'react';

const Signin = () => {
    return(
    <div className='bg-gray-200 md:container h-screen w-screen'>
      <div className="container mx-auto">
        <Image src={logo} alt="linkedin-logo" height={500} width={150} />
      </div>

      <div className="bg-white shadow-md rounded-md mx-auto p-8 w-96">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-700">Sign in to LinkedIn</h1>
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

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="mt-8">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <a className="font-bold text-blue-500 hover:text-blue-700" href="/Signup">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
    );
}

export default Signin;