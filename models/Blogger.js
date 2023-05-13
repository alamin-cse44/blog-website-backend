const mongoose = require("mongoose");

const bloggerSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please add a blogger name"],
        unique: [true, 'Please add a unique name'],
        lowercase: true,
        trim: true,
        minLength: [3, "Name must be at least three characters"],
        maxLength: [100, "Name doesn't exceed 100 characters"]
    },

    blogTitle: {
        type: String,
        required: [true, "Please add a blog title"],
        unique: [true, 'Please add a unique title'],
        trim: true,
        minLength: [3, "title must be at least three characters"],
        maxLength: [100, "title doesn't exceed 100 characters"]
    },
    
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Blogger = mongoose.model('Blogger', bloggerSchema);

module.exports = Blogger;