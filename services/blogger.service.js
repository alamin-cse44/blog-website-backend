const Blogger = require("../models/Blogger")

exports.createBloggerService = async(data) => {
    const blogger = await Blogger.create(data);
    
    return blogger;
}

exports.getBloggerService = async() => {
    const blogger = await Blogger.find({});
    
    return blogger;
}

exports.getBloggerServiceById = async(id) => {
    const blogger = await Blogger.findOne({ _id: id });
    
    return blogger;
}