//This is another example of class, in this case we are constructing it, now in this constructor we are looking for the correct object type 
//AND whether the field actually exists. If anything of these fail in the constructor we throw our own custom error.
class Comments {

    constructor(obj) {

        if (!obj.comments) {
            throw new Error("You must include a comment");
        } else if (typeof obj.comments != "string") {
            throw new Error("comment must be a string");
        } else {
            this.comments = obj.comments;
        }
    }
}

//Exporting the Blog class
module.exports = Comments;