const { Schema } = require('mongoose');
const mongoose = require('mongoose');

// Define the postSchema with an auto-incrementing 'id' field
const postSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    user_email: {
      type: String,
      required: true,
      unique: false,
    },
    content: {
      type: String,
    },
    image_name: {
      type: String,
    },
  },
  { collection: 'posts' }
);

// Create a model for the "counters" collection to store the sequence value
const Counter = mongoose.model('Counter', new Schema({ _id: String, seq: Number }));

// Create a pre middleware to auto-increment the 'id' field before saving a new post
postSchema.pre('save', async function (next) {
  const doc = this;
  if (!doc.isNew) {
    return next();
  }

  try {
    // Find the corresponding counter document and increment the sequence value
    const counter = await Counter.findByIdAndUpdate(
      'posts', // Use the same ID as in the "counters" collection
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    // Set the auto-incremented 'id' for the new post
    doc.id = counter.seq;
    next();
  } catch (err) {
    return next(err);
  }
});

// Create the Post model using the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
