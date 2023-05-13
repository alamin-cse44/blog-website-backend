const {
  createBloggerService,
  getBloggerService,
  getBloggerServiceById,
} = require("../services/blogger.service");

exports.createBlogger = async (req, res, next) => {
  try {
    const blogger = await createBloggerService(req.body);

    res.status(200).json({
      status: "success",
      message: "Blogger inserted successfully!",
      data: blogger,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Blogger is fail to inserted!",
    });
  }
};

exports.getBlogger = async (req, res, next) => {
  try {
    const blogger = await getBloggerService(req.body);

    res.status(200).json({
      status: "success",
      data: blogger,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getBloggerById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blogger = await getBloggerServiceById(id);

    res.status(200).json({
      status: "success",
      data: blogger,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
