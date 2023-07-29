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
    // Return the list of  notifications
    return res.status(200).json({ notifications: notifications });
  } catch (err) {
    return next(err);
  }
};


exports.addNotification = addNotification;
exports.getNotification = getNotification;
