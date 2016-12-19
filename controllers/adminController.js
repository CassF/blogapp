const Blogs = require("../models/blog");

class AdminController {

    static showBlog(req,res){
        // if (req.session.blogTitle) {
        //     html += "<br>Your blog title is: " + req.session.blogTitle;
        // }
        // res.send(html);
        res.render("admin");
    }

    /**
     * This function creates a blog post
     */
    static createBlog(req,res){
        if (req.body.action == "Create Blog Post") {
            req.session.blogs.push(req.body.blogTitle, req.body.blogContent);
            // res.redirect("/blogs");
            res.render("admin");
            console.log(req.session.blog);
        }
    }
    /**
     * This function deletes a blog post
     * @param title - This is the title of the post that I want to delete
     */
    static deleteBlog(title){
        let blogs = req.session.blogs;
        for (let i in blogs) {
            if(blogs[i].title === title) {
                blogs.splice(i,1);
                // res.redirect("/blogs");
                res.render("admin");
            }
        }    
    }
}

        //This is a promise, promises work by deffering the execution of the script until the function being called as come back with either a 
        //success or an error. Successes are caught with the .then() function and errors in the .catch()
    //     Blogs.doFetchPosts()
    //         .then(result => {
    //             res.status(200).send({
    //                 result: result
    //             });
    //         })
    //         .catch(err => {
    //             res.status(400).send(err);
    //         });
    // }

//     static deleteBlog(req,res){
//         Blogs.deleteBlog(req.session.blogs)
//             .then(result => {
//                 let blogs = req.session.blogs;
//                 for (let i in blogs) {
//                     if(blogs[i].title === title) {
//                         blogs.splice(i,1);
//                         }
//                     }   
//                 });
//             }
//             .catch(err => {
//                 res.status(400).send(err);
//             });
//     }
// }


//Exporting the AdminController class
module.exports = AdminController;