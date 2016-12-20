const Blogs = require("../models/blog");

class BlogController {

    static showBlog(req,res){
        res.render("home", {
            blogs: req.session.blogs
            
        });
    }

    // static showOneBlog(req,res){
    //     let blogs = req.session.blogs;
    //     for (let i in blogs) {
    //         if (blogs[i].blogTitle === blogTitle){
    //             console.log(req.session.blogs[i].blogTitle);
    //             console.log(req.session.blogs[i].blogContent);
    //             res.render("admin");
    //         }else {
    //             console.log("Blog does not exist");
    //              res.render("home");
    //         }
    //     }
    // }

    static showOneBlog(req,res){
        res.render("singleblog", {
            blogs: req.session.blogs  
        });
    }
}

//Exporting the BlogController class
module.exports = BlogController;