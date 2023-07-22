import React, { useState } from 'react';

const AddPost = ({ onAddPost }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    //
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
