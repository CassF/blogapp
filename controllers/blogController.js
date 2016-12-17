const Blogs = require("../models/blog");

class BlogController {
    static viewBlog(req, res){
        res.render(req.session.blogs);
    }
}

module.exports = BlogController;