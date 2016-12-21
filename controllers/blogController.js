const Blogs = require("../models/blog");

class BlogController {

    static showBlog(req, res) {
        res.render("home", {
            blogs: req.session.blogs

        });
    }

    // static showOneBlog(req, res) {
    //     res.render("singleblog", {
    //         blogs: req.session.blogs
    //     });
    // }

    static showOneBlog(req, res) {
        let blogs = req.session.blogs;

        for (let i in blogs) {
            console.log(blogs[i].blogTitle);
            console.log(req.params.title);
            if (blogs[i].blogTitle == req.params.title) {
                    console.log("hey");
            }
        }
        res.status(200).send("Done");
    }
}

//Exporting the BlogController class
module.exports = BlogController;