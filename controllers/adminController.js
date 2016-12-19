const Blog = require("../models/blog");

class AdminController {
    /**
     * This method shows all blog post
     * It loops through the req.session.blogs array and prints the blog title and content for each i tem 
     */
    static showBlog(req,res){
        let blogs = req.session.blogs;
        for (let i = 0; i < blogs.length; i++) {
            console.log(blogs[i].blogTitle);
            console.log(blogs[i].blogContent);
        }
        res.render("admin");
    }

    /**
     * This method creates a blog post
     */
    static createBlog(req,res){
        req.session.blogs = req.session.blogs || [];
        const blogPost = new Blog(req.body);
        req.session.blogs.push(blogPost);
        console.log(req.session.blogs);
        //Test loop to view blogTitle and blogContent of each req.session.blogs
        let blogs = req.session.blogs;
        for (let i = 0; i < blogs.length; i++) {
            console.log(blogs[i].blogTitle);
            console.log(blogs[i].blogContent);
        }
        res.render("admin");  

    }

    /**
     * This method deletes a blog post
     * @param title - This is the title of the post that I want to delete
     */
    static deleteBlog(title){
        let blogs = req.session.blogs;
        for (let i in blogs) {
            if(blogs[i].title === title) {
                blogs.splice(i,1);
                res.render("admin");
            }
        }    
    }
}


//Exporting the AdminController class
module.exports = AdminController;