import Navbar from "../components/navbar";
import Post from "../components/post";
import AddPost from "../components/addPost"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import the useRouter hook


const Home = () =>{
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const router = useRouter(); // Initialize the router hook

  const fetchPosts = async () => {
    try {
      // Retrieve the JWT token from localStorage
      const token = localStorage.getItem('token');

      // Set up headers with the JWT token
      const headers = {
        Authorization: token ? `${token}` : '', // Include the token if available
      };

      const response = await axios.get('http://localhost:5002/posts/', { headers });
      
      // setPosts(response.data.posts);
      const filteredPosts = response.data.posts.filter((post) => post.user_email !== localStorage.getItem('email'));
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);

      // Check for a 401 Unauthorized response from the server
      if (error.response && error.response.status === 401) {
        // Use the router to navigate to the signin page
        router.push('/');
      }
    }
  };

  
  useEffect(() => {
    // Fetch posts after the component mounts
    fetchPosts();
  
    // Fetch posts every 5 seconds (5000 milliseconds)
    const interval = setInterval(fetchPosts, 5000);
  
    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);
  

  return(
      <>
          <Navbar />

          <div className="bg-[#f4f4f5]">
              <main className="container mx-auto p-4">
              <AddPost/>

              {posts.map((post) => (
              <Post
                  key = {post.id}
                  user_name={post.user_name}
                  content={post.content}
                  imageName = {post.image_name}
              />
              ))}
              </main>
          </div>
          
      
      </>
  );
}

export default Home;