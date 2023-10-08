import React from 'react';
import ImageViewer from './imageViewer';

const Post = ({ user_email, content, imageName }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-4">
        <p className="text-lg font-semibold">{user_email}</p>
      </div>

      <p className="mb-4">{content}</p>

      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        <ImageViewer imageName={imageName} />
      </div>
    </div>
  );
};

export default Post;
