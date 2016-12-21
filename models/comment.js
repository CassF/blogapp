//This is another example of class, in this case we are constructing it, now in this constructor we are looking for the correct object type 
//AND whether the field actually exists. If anything of these fail in the constructor we throw our own custom error.
class Comments {

    constructor(obj) {

        if (!obj.comment) {
            throw new Error("You must include a comment");
        } else if (typeof obj.comment != "string") {
            throw new Error("comment must be a string");
        } else {
            this.comment = obj.comment;
        }
    }
}

//Exporting the Blog class
module.exports = Comments;