const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


// Add headers before the routes are defined
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
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



