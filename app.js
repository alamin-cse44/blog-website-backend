const express = require("express");
const app = express();
const cors = require("cors");
 
// middlewares
app.use(cors());
app.use(express.json());

// routes
const bloggerRoute = require("./routes/blogger.route");

app.get("/", (req, res) => {
    res.send("Server is running");
})

// connect the data store
app.use("/api/v1/blogger", bloggerRoute);



module.exports = app;