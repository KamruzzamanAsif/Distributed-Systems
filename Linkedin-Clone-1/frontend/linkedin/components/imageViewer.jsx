import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageViewer = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the image from the backend API
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${imageName}`, {
          responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [imageName]);

  return <img src={imageUrl} alt="Post content" className="w-full h-40 object-cover rounded-lg" />;
};

export default ImageViewer;
