const axios = require('axios');
const Post = require('../model/Post'); 

const Minio = require('minio');
const uploadedImages = []; // Array to store image name and object name associations

// Set up MinIO client
const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    /* home */
    // accessKey: 'tymR6ieVSAHiRtYzuie2',
    // secretKey: '5FrOOFcFxNIObYqTBEHUz6OCBsfzQFcPJmMJJy3i',

    /* iit */
    accessKey: 'cFsgWX791k0wVcADmHeu',
    secretKey: 'IxiTlehqYysPPZsGjVZtbuoICO3sDCIsSFsd5mqr',
});


const createPost = async (req, res, next) => {
    const { user_name, user_email, content} = req.body;

    if (!user_email) {
        return res.status(422).json({ message: 'Invalid data. Please provide user_email' });
    }

    try {
        // minio part handling image
        if (!req.file) {
        return res.status(400).send('No image file found.');
        }
    
        const filePath = req.file.path;
        const metaData = {
        'Content-Type': req.file.mimetype,
        };
    
        const bucketName = 'post-images'; 
        const objectName = req.file.originalname;
        const imageName = req.file.originalname; // Save the image name
    
        minioClient.fPutObject(bucketName, objectName, filePath, metaData, (err, etag) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Error uploading the image.');
            }
        
            console.log('Image uploaded successfully: ' + objectName);
        
            // Save the image name and object name association in the array
            uploadedImages.push({ imageName, objectName });
        });

        // Create a new Post instance
        const image_name = imageName;
        const newPost = new Post({
            id: 0,
            user_name,
            user_email,
            content,
            image_name,
        });

        // Save the post to the database
        const post = await newPost.save();

        // Notification system
        try{
            const data = {
                user_name,
                user_email, // Replace with the user's email
                message: user_name + " has added a post",
            };
    
            const response = await axios.post('http://localhost:4003/notifications/', data, {
            headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            },
            });
    
            if (response.status === 200) {
            const data = response.data;
            } else {
            console.log('Error:', response.statusText);
            }
        }catch (error) {
            // Handle any errors that occurred during the Axios request
            console.error('Error:', error);
        }

        // Return the newly created post
        return res.status(200).json({ post });
    } catch (err) {
        return next(err);
    }
};



const getAllPosts = async (req, res, next) => {
    try {
        // Find all posts 
        const posts = await Post.find();

        // Return the list of posts
        return res.status(200).json({ posts });
    } catch (err) {
        return next(err);
    }
};



exports.createPost = createPost;
exports.getAllPosts = getAllPosts;