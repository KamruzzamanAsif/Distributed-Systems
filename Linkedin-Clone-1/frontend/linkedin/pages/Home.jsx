import Navbar from "../components/navbar";
import Post from "../components/post";
import AddPost from "../components/addPost"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
  

const Home = () =>{
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts/'); 
      // setPosts(response.data.posts);
      const filteredPosts = response.data.posts.filter((post) => post.user_email !== localStorage.getItem('email'));
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
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
                  user_email={post.user_email}
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