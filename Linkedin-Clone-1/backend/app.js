const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
app.use(express.json());
app.use("/", router);

mongoose
    .connect(
        "mongodb://127.0.0.1:27017/linkedin",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then( () => 
        app.listen(5000, () => console.log("Connected to MongoDB and listening on port 5000"))
    )
    .catch(err => console.log("Error connecting to MongoDB" + err));
















    
// const multer = require('multer');
// const Minio = require('minio');
// const uploadedImages = []; // Array to store image name and object name associations
// const upload = multer({ dest: 'uploads/' });
// // Set up MinIO client
// const minioClient = new Minio.Client({
//     endPoint: 'localhost',
//     port: 9000,
//     useSSL: false,
//     accessKey: 'ZUvdWVXOtJcSlTgXZ6pg',
//     secretKey: 'dMC1G5Qiv8YmIZQhS6bETkdDeCUOv5BVABdEjdpR',
//     });

// // Handle the image upload and store it on MinIO
// app.post('/upload', upload.single('image'), (req, res) => {
//     if (!req.file) {
//       return res.status(400).send('No image file found.');
//     }
  
//     const filePath = req.file.path;
//     const metaData = {
//       'Content-Type': req.file.mimetype,
//     };
  
//     const bucketName = 'post-images'; // Replace with your desired bucket name
//     const objectName = req.file.originalname;
//     const imageName = req.file.originalname; // Save the image name
  
//     minioClient.fPutObject(bucketName, objectName, filePath, metaData, (err, etag) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).send('Error uploading the image.');
//       }
  
//       console.log('Image uploaded successfully: ' + objectName);
  
//       // Save the image name and object name association in the array
//       uploadedImages.push({ imageName, objectName });
  
//       return res.status(200).send('Image uploaded successfully.');
//     });
//   });


