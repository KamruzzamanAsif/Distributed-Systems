const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const notificationCleanerJob = require('./controller/notificationCleaner');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use("/notification", router);

mongoose
    .connect(
        "mongodb://notification_db/notifications",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then( () => 
        app.listen(5003, () => console.log('Connected to MongoDB notification_db and listening on port 5003'))
    )
    .catch(err => console.log("Error connecting to MongoDB notification_db" + err));


// Start the notification cleaner job
notificationCleanerJob();

