const express       = require("express");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
//const Thing       = require("./models/thing");
const stuffRoutes   = require('./routes/stuff');
const userRoutes    = require('./routes/user');
const path          = require("path");

mongoose.connect("mongodb+srv://apetugideon:yWS7JXzsFPwQLSvO@cluster0-v44vn.mongodb.net/test?retryWrites=true&w=majority")
.then(() => {
    console.log("Connection succeful, to mongoDb Atlas");
})
.catch((error) => {
    console.log("could not connect");
    console.error(error);
});

const app = express();

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes); 

module.exports = app;