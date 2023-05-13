const express = require("express");
const router = express.Router();

const bloggerController = require("../controllers/blogger.controller");

router.route("/")
.post(bloggerController.createBlogger)
.get(bloggerController.getBlogger)

router.route("/:id")
.get(bloggerController.getBloggerById)



module.exports = router;