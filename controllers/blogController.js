const Blogs = require("../models/blog");

class BlogController {
    static showBlog(req, res){
        // res.render(req.session.blogs);
        res.render("admin");
    }

    // static showBlog(req,res){
    //     res.render("admin");
    // }

    // static viewOneBlog(req, res){
    //     let blogs = req.session.blogs
    //     for(let i in blogs){
    //         if (blogs[i].id === id){
    //         res.render(req.session.blogs[i]);
    //     } else {
    //         console.log("Blog does not exist");
    //     }
    // }

    static viewOneBlog(req, res){
        res.render(req.session.blogs[i]);
    }
}

//Exporting the BlogController class
module.exports = BlogController;