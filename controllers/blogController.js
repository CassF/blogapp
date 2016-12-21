const Blogs = require("../models/blog");
const Comments = require("../models/comment")

class BlogController {

    static showBlog(req, res) {
        res.render("home", {
            blogs: req.session.blogs

        });
    }

    static showOneBlog(req, res) {
        res.render("singleblog", {
            blogs: req.session.blogs
        });
    }

    // static showOneBlog(req, res) {
    //     let blogs = req.session.blogs;

    //     for (let i in blogs) {
    //         console.log(blogs[i].blogTitle);
    //         console.log(req.params.title);
    //         if (blogs[i].blogTitle == req.params.title) {
    //                 console.log("hey");
    //         }
    //     }
    //     res.status(200).send("Done");
    // }

    static addComment(req, res) {
        let blogs = req.session.blogs
        for (let i in blogs) {
            if (blogs[i].blogTitle === req.body.title) {
                blogs[i].comments = blogs[i].comments || [];
                const comments = new Comments(req.body);
                blogs[i].comments.push(comments);
                console.log(blogs[i]);
            }
        }
        res.redirect("/");
    }
}


//Exporting the BlogController class
module.exports = BlogController;