const Blogs = require("../models/blog");
const Comments = require("../models/comment")

class BlogController {

    /**
     * This method shows all blog posts
     */
    static showBlog(req, res) {
        res.render("home", {
            blogs: req.session.blogs

        });
    }

    /**
     * This method shows one blog posts
     */
    static showOneBlog(req, res) {
        let blogs = req.session.blogs
        for (let i in blogs) {
            if (blogs[i].blogTitle === req.body.title) {
                console.log(req.body.title);
                // res.redirect("/:title", {
                //     blogs: req.session.blogs
                // });
            }
        }
    }

    /**
     * This method adds a comment to a blog post
     * @param title - This is the title of the post that I want to delete
     */
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