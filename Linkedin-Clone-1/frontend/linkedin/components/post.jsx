import React from 'react';

const Post = ({ user, content }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <p className="text-lg font-semibold">{user.name}</p>
      </div>
      {content && (
        <>
          {content.text && (
            <p className="mb-4">{content.text}</p>
          )}
          {content.image && (
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <img
                src={content.image}
                alt="Post content"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Post;
