import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    try {
      if (!text) {
        console.log('Please enter post text.');
        return;
      }

      // If image is not selected, set it to null in the formData
      const formData = new FormData();
      formData.append('user_email', localStorage.getItem('email')); // Replace with the user's email
      formData.append('content', text);
      formData.append('image', image || null);
      
      console.log(formData);
      
      const response = await axios.post('http://localhost:5000/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        // If the post is successfully created on the backend, you can handle the data
        // or perform any other actions here
        console.log('New post:', data.post);
        // Call the onAddPost function to update the post list in the parent component
        
        // Clear the input fields after successful submission
        setText('');
        setImage(null);
      } else {
        // Handle any error responses from the backend here
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      // Handle any errors that occurred during the Axios request
      console.error('Error:', error);
    }


    // Notification system
    try{  
      const data = {
        user_email: localStorage.getItem('email'), // Replace with the user's email
        message: localStorage.getItem('email') + " has added a post",
      };

      const response = await axios.post('http://localhost:5000/notifications/', data, {
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
      } else {
        console.log('Error:', response.statusText);
      }
    }catch (error) {
      // Handle any errors that occurred during the Axios request
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Create a New Post</h2>
      <textarea
        className="w-full p-2 border rounded-md resize-none mb-2"
        placeholder="Enter your post text..."
        value={text}
        onChange={handleTextChange}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default AddPost;
