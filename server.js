const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const colors = require("colors");

const app = require("./app");


const port = process.env.PORT || 8080;


mongoose.connect('mongodb://127.0.0.1:27017/blog-website').then( () => {
    console.log(`Database connection is successful`.red.bold)
} );

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`.yellow.bold);
})