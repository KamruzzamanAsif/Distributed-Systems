const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


const mongoose = require('mongoose');
const router = require('./routes/user-routes');
app.use("/user", router);


mongoose
    .connect(
        "mongodb://user_db/users",
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then( () => 
        app.listen(5001, () => console.log("Connected to MongoDB user_db and listening on port 5001"))
    )
    .catch(err => console.log("Error connecting to MongoDB user_db" + err));



