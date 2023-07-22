const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const cors = require('cors');
app.use(express.json());
app.use(cors());
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




