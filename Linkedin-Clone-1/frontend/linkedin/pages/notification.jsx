import Navbar from "../components/navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NotificationPage = () => {

  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notifications/'); 
      const filteredNotification = response.data.notifications.filter((notification) => notification.user_email !== localStorage.getItem('email'));
      setNotifications(filteredNotification);
    } catch (error) {
      console.error('Error fetching notifications:', error);
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
