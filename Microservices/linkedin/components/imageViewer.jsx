import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageViewer = ({ imageName }) => {
  return <img src={"http://127.0.0.1:9000/post-images/"+imageName} alt="Post content" className="w-full h-40 object-cover rounded-lg" />;
};

export default ImageViewer;
