const Notification = require('../model/Notification');

const addNotification = async (req, res, next) => {
    try {
        const { user_email, message } = req.body;
    
        if (!user_email || !message) {
          return res.status(422).json({ message: 'Invalid data. Please provide user_email and message.' });
        }
    
        // Create a new notification instance
        const newNotification = new Notification({notification_id: 0, user_email, message });
    
        // Save the notification to the database
        const notification = await newNotification.save();
    
        // Return the newly created notification
        return res.status(200).json({ notification });
      } catch (err) {
        return next(err);
      }
}


const getNotification = async (req, res, next) => {
  try {
    // Find all notifications
    const notifications = await Notification.find();

    // Filter out notifications that are older than 5 minutes
    const currentTime = new Date();
    const filteredNotifications = notifications.filter((notification) => {
      const notificationTime = new Date(notification.createdAt);
      const diffInMinutes = Math.floor((currentTime - notificationTime) / (1000 * 60));
      return diffInMinutes <= 30;
    });

    // Return the list of filtered notifications
    return res.status(200).json({ notifications: filteredNotifications });
  } catch (err) {
    return next(err);
  }
};

exports.addNotification = addNotification;
exports.getNotification = getNotification;