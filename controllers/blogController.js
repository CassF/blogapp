const Blogs = require("../models/blog");

class BlogController {

    static showBlog(req,res){
        res.render("home");
        // let blogs = req.session.blogs;
        // for (let i = 0; i < 3; i++) {
        //     console.log(blogs[i].blogTitle);
        //     console.log(blogs[i].blogContent);
        //     // $("#blogList").append(`<a href="#" name="post" class="post" data-id="${blogs[i].blogTitle}"><p>${blogs[i].blogContent}</p></a>`);
        //     // $("#blogList").append(`<h2>${blogs[i].blogTitle}</h2>`);
        // }
    }

    static showOneBlog(req,res){
        let blogs = req.session.blogs;
        for (let i in blogs) {
            if (blogs[i].blogTitle === blogTitle){
                console.log(req.session.blogs[i].blogTitle);
                console.log(req.session.blogs[i].blogContent);
                res.render("admin");
            }else {
                console.log("Blog does not exist");
                 res.render("home");
            }
        }
    }

}

//Exporting the BlogController class
module.exports = BlogController;