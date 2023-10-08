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
        "mongodb://127.0.0.1:27017/user_db",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then( () => 
        app.listen(4001, () => console.log("Connected to MongoDB user_db and listening on port 4001"))
    )
    .catch(err => console.log("Error connecting to MongoDB user_db" + err));



