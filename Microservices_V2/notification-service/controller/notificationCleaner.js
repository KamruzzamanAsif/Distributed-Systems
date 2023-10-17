const mongoose = require('mongoose');
const Notification = require('../model/Notification');


const cleanOldNotifications = async () => {
    try {
        // Find all notifications
        const notifications = await Notification.find();

        // Filter out notifications that are older than 30 minutes
        const currentTime = new Date();
        const filteredNotifications = notifications.filter((notification) => {
        const notificationTime = new Date(notification.createdAt);
        const diffInMinutes = Math.floor((currentTime - notificationTime) / (1000 * 60));
        return diffInMinutes > 30;
        });

        // Delete the old notifications
        for (const notification of filteredNotifications) {
            await Notification.findByIdAndDelete(notification._id);
        }

        console.log(`${filteredNotifications.length} old notifications cleaned.`);
    } catch (err) {
        console.error('Error cleaning old notifications:', err);
    }
};


const intervalTimeInMinutes = 1;
// Schedule the cleaner job
const notificationCleanerJob = () => {
    setInterval(cleanOldNotifications, intervalTimeInMinutes * 60 * 1000);
};


module.exports = notificationCleanerJob;