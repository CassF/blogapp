//This is another example of class, in this case we are constructing it, now in this constructor we are looking for the correct object type 
//AND whether the field actually exists. If anything of these fail in the constructor we throw our own custom error.
class Blog {

    constructor(obj){

        if (!obj.blogTitle){
            throw new Error("You must include blog title");
        } else if (typeof obj.blogTitle != "string"){
            throw new Error("Blog Title must be a string");
        } else {
            this.blogTitle = obj.blogTitle;
        }

        if (!obj.blogContent){
            throw new Error("You must include blog content");
        } else if (typeof obj.blogContent != "string"){
            throw new Error("Blog Content must be a string");
        } else {
            this.blogContent = obj.blogContent;
        }

        // if (!obj.blogComment){
        //     throw new Error("You must include a first name");
        // } else if (typeof obj.blogComment != "string"){
        //     throw new Error("Comment must be a string");
        // } else {
        //     this.blogComment = obj.blogComment;
        // }
    }
}

//Exporting the Blog class
module.exports = Blog;