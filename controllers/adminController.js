const Blog = require("../models/blog");

class AdminController {
    /**
     * This method shows all blog post
     * It loops through the req.session.blogs array and prints the blog title and content for each i tem 
     */
    static showBlog(req, res) {
        res.render("admin", {
            blogs: req.session.blogs
        });
    }

    /**
     * This method creates a blog post
     */
    static createBlog(req, res) {
        req.session.blogs = req.session.blogs || [];
        const blogPost = new Blog(req.body);
        req.session.blogs.push(blogPost);
        console.log(req.session.blogs);
        res.render("admin", {
            blogs: req.session.blogs
        });
    }

    /**
     * This method deletes a blog post
     * @param title - This is the title of the post that I want to delete
     */
    static deleteBlog(req, res) {
        let blogs = req.session.blogs;

        for (let i in blogs) {
            // console.log(blogs[i].blogTitle);
            // console.log(req.params.title);
            if (blogs[i].blogTitle == req.params.title) {
                blogs.splice(i, 1);
            }
        }
        req.session.blogs = blogs;
        res.status(200).send("Done");
    }
}


//Exporting the AdminController class
module.exports = AdminController;