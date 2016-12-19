const Blogs = require("../models/blog");

class BlogController {

    static showBlog(req, res){
        // let blogs = req.session.blogs;
        // for (let i = 0; i < 3; i++) {
        //     console.log(req.session.blogs[i].blogTitle);
        //     console.log(req.session.blogs[i].blogContent);
            res.render("admin");
        // }
    }

    static showOneBlog(req,res){
        // let blogs = req.session.blogs;
        // for (let i in blogs) {
        //     if (blogs[i].blogTitle === blogTitle){
        //         console.log(req.session.blogs[i].blogTitle);
        //         console.log(req.session.blogs[i].blogContent);
        //         res.render("admin");
        //     }else {
                console.log("Blog does not exist");
                 res.render("admin");
        //     }
        // }
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
}

//Exporting the BlogController class
module.exports = BlogController;