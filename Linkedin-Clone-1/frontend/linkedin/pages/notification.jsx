import Navbar from "../components/navbar";
import React from 'react';

const notifications = [
  {
    id: 1,
    message: 'You have a new friend request.',
  },
  {
    id: 2,
    message: 'Your post has been liked.',
  },
  // Add more notifications here...
];

const NotificationPage = () => {
    return (
    <>
        <Navbar />

        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
        {notifications.map((notification) => (
            <div key={notification.id} className="bg-orange-50 rounded-lg shadow p-4 mb-4">
            <p>{notification.message}</p>
            </div>
        ))}
        </div>

    </>
    );
};

export default NotificationPage;
