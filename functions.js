class Functions {
    showBlogA(array) {
        return new Promise(
            (resolve) => {
                resolve(array);
            }
        )
    }

    createBlog(array1) {
        return new Promise(
            (resolve) => {
                resolve(array1.push({blogTitle:"Blog3", blogContent:"Blog Content 3"}));
            }
        )
    }

    deleteBlog(array2) {
        return new Promise(
            (resolve) => {
                resolve(array2.splice(2,1));
            }
        )
    }

    showBlog(array) {
        return new Promise(
            (resolve) => {
                resolve(array);
            }
        )
    }

    showOneBlog(aString) {
        return new Promise(
            (resolve) => {
                resolve(aString);
            }
        )
    }

    addComment(array) {
        return new Promise(
            (resolve) => {
                resolve(array.push("c5"));
            }
        )
    }
};



module.exports = Functions;