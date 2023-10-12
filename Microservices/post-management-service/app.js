const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const minioClient = require('./controller/minioClient');

const mongoose = require('mongoose');
const router = require('./routes/user-routes');

// ============== create bucket dynamically starts=================

const bucketName = "post-images";

(async () => {
    console.log(`Creating Bucket: ${bucketName}`);
    await minioClient.makeBucket(bucketName, "hello-there").catch((e) => {
        console.log(
            `Error while creating bucket '${bucketName}': ${e.message}`
        );
    });

    console.log(`Setting public access policy for bucket: ${bucketName}`);
    const policy = `
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": [
                    "arn:aws:s3:::${bucketName}/*"
                ]
            }
        ]
    }`;

    await minioClient.setBucketPolicy(bucketName, policy).catch((e) => {
        console.log(
            `Error while setting bucket policy for '${bucketName}': ${e.message}`
        );
    });

    console.log(`Listing all buckets...`);
    const bucketsList = await minioClient.listBuckets();
    console.log(
        `Buckets List: ${bucketsList.map((bucket) => bucket.name).join(",\t")}`
    );
})();
// ============== create bucket dynamically ends=================


app.use("/post", router);
mongoose
    .connect(
        "mongodb://post_db/posts",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then( () => 
        app.listen(5002, () => console.log("Connected to MongoDB post_db and listening on port 5002"))
    )
    .catch(err => console.log("Error connecting to MongoDB post_db" + err));




