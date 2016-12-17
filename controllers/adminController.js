const Blogs = require("../models/blog");

class AdminController {

    static createBlog(req,res){
        if (req.body.action == "Create Blog Post") {
            req.session.blogs.push(req.body.blog);
            res.redirect("/blogs");
        }
    }

    static deleteBlog(req, res){
        let blogs = req.session.blogs;
        for (let i in blogs) {
            if(blogs[i].title === title) {
                blogs.splice(i,1);
                res.redirect("/blogs");
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



module.exports = AdminController;