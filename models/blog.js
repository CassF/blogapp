//This is another example of class, in this case we are constructing it, now in this constructor we are looking for the correct object type 
//AND whether the field actually exists. If anything of these fail in the constructor we throw our own custom error.

class Blog {

    constructor(session){
        req.session.blogs = req.session.blogs || [];

        if (!session.blogTitle){
            throw new Error("You must include a first name");
        } else if (typeof session.blogTitle != "string"){
            throw new Error("First name must be a string");
        } else {
            this.blogTitle = req.session.blogTitle;
        }

        if (!session.blogContent){
            throw new Error("You must include blog content");
        } else if (typeof session.blogContent != "string"){
            throw new Error("First name must be a string");
        } else {
            this.blogContent = req.session.blogContent;
        }
    }
}

//Exporting the Blog class
module.exports = Blog;