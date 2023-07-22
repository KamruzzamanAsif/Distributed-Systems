import Image from 'next/image';
import logo from 'public/linkedin-logo.jpeg';
import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSignin = async () => {
    try {
      // Make a POST request to your backend API
      const response = await axios.post('http://localhost:5000/signin', formData);

      // Handle the response as needed (e.g., show success message or redirect to home page)
      console.log('Signin successful!', response.data);

      // Redirect to the home page (you should replace '/home' with the actual URL of your home page)
      window.location.href = '/home';
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error('Signin failed:', error);
    }
  };

  return (
    <div className="bg-gray-200 md:container h-screen w-screen">
      <div className="container mx-auto">
        <Image src={logo} alt="linkedin-logo" height={500} width={150} />
      </div>

      <div className="bg-white shadow-md rounded-md mx-auto p-8 w-96">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-700">Sign in to LinkedIn</h1>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignin} // Call handleSignin when the "Sign In" button is clicked
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
};

export default Signin;
