const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    notification_id: {
      type: Number,
      required: true,
      unique: true,
    },
    user_email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // This will set the current date and time when a new notification is created
    },
  },
  { collection: 'notifications' } // The collection name where the notifications will be stored
);

// Create a model for the "counters" collection to store the sequence value
const Counter = mongoose.model('NotificationIDCounter', new Schema({ _id: String, seq: Number }));

// Create a pre middleware to auto-increment the 'notification_id' field before saving a new notification
notificationSchema.pre('save', async function (next) {
  const doc = this;
  if (!doc.isNew) {
    return next();
  }

  try {
    // Find the corresponding counter document and increment the sequence value
    const counter = await Counter.findByIdAndUpdate(
      'notifications', // Use a unique ID as in the "counters" collection for notifications
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    // Set the auto-incremented 'notification_id' for the new notification
    doc.notification_id = counter.seq;
    next();
  } catch (err) {
    return next(err);
  }
});

// Create the Notification model using the schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
