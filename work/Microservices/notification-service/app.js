const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const notificationCleanerJob = require('./controller/notificationCleaner');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use("/", router);

mongoose
    .connect(
        "mongodb://127.0.0.1:27017/notification_db",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then( () => 
        app.listen(4003, () => console.log('Connected to MongoDB notification_db and listening on port 4003'))
    )
    .catch(err => console.log("Error connecting to MongoDB notification_db" + err));


// Start the notification cleaner job
notificationCleanerJob();

