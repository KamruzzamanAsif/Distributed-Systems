import Navbar from "../components/navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import the useRouter hook


const NotificationPage = () => {

  const [notifications, setNotifications] = useState([]);
  const router = useRouter(); // Initialize the router hook

  const fetchNotifications = async () => {
    try {
      // Retrieve the JWT token from localStorage
      const token = localStorage.getItem('token');

      // Set up headers with the JWT token
      const headers = {
        Authorization: token ? `${token}` : '', // Include the token if available
      };
      const response = await axios.get('http://localhost/notification/notifications', { headers }); 
      const filteredNotification = response.data.notifications.filter((notification) => notification.user_email !== localStorage.getItem('email'));
      setNotifications(filteredNotification);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      
      // Check for a 401 Unauthorized response from the server
      if (error.response && error.response.status === 401) {
        // Use the router to navigate to the signin page
        router.push('/');
      }
    }
  };
  
  useEffect(() => {
    fetchNotifications();
  
    // Fetch notifications every 5 seconds (5000 milliseconds)
    const interval = setInterval(fetchNotifications, 5000);
  
    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);


    return (
    <>
        <Navbar />

        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
        {notifications.map((notification) => (
            <div key={notification.notification_id} className="bg-orange-50 rounded-lg shadow p-4 mb-4">
            <p>{notification.message}</p>
            </div>
        ))}
        </div>

    </>
    );
};

export default NotificationPage;
