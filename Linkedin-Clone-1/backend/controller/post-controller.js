const Post = require('../model/Post'); 


const createPost = async (req, res, next) => {
    const { user_email, content, image_link } = req.body;

    if (!user_email) {
        return res.status(422).json({ message: 'Invalid data. Please provide user_email' });
    }

    try {
        // Create a new Post instance
        const newPost = new Post({
            user_email,
            content,
            image_link,
        });

        // Save the post to the database
        const post = await newPost.save();

        // Return the newly created post
        return res.status(201).json({ post });
    } catch (err) {
        return next(err);
    }
};


const getAllPostsExceptCurrentUser = async (req, res, next) => {
    const { user_email } = req.body;

    try {
        // Find all posts except the post of the current user
        const posts = await Post.find({ user_email: { $ne: user_email } });

        // Return the list of posts
        return res.status(200).json({ posts });
    } catch (err) {
        return next(err);
    }
};


exports.createPost = createPost;
exports.getAllPostsExceptCurrentUser = getAllPostsExceptCurrentUser;