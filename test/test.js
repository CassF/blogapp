const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const insert = require('chai').assert;
const Functions = require("../functions");
const func = new Functions();
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);


describe("Admin", () => {

    it("should create a blog post", (done) => {
        let array1 = [{ blogTitle: "Blog1", blogContent: "Blog Content 1" }, { blogTitle: "Blog2", blogContent: "Blog Content 2" }];
        func.createBlog(array1)
            .then(result => {
                expect(array1).to.include({ blogTitle: "Blog3", blogContent: "Blog Content 3" });
                done();
            })
    });

    it("should delete a blog post", (done) => {
        let array2 = [{ blogTitle: "Blog1", blogContent: "Blog Content 1" }, { blogTitle: "Blog2", blogContent: "Blog Content 2" }, { blogTitle: "Blog3", blogContent: "Blog Content 3" }];
        func.deleteBlog(array2)
            .then(result => {
                expect(array2).to.have.length(2);
                done();
            })
    });
});

describe("User", () => {

    it("should show one blog posts", (done) => {
        func.showOneBlog("foobar")
            .then(result => {
                expect(result).to.contain("foo");
                done();
            })
    });

    it("should add a comment to a blog post", (done) => {
        let comments = [{ comment1: "Comment1", comment2: "Comment2" }, { comment1: "Comment1", comment2: "Comment2" }];
        func.addComment(comments)
            .then(result => {
                expect(comments).to.include({ comment1: "Comment3", comment2: "Comment3" });
                done();
            })
    });
});

const Blog = require("../models/blog");
const newBlog = {
    blogTitle:"Blog title 3",
    blogContent: "Blog content"
};



describe("Models", function () {
    it("should create a blog object", (done) => {
        expect(newBlog).to.containSubset({blogTitle:"Blog title 3", blogContent: "Blog content"
        });
        done();
        })
    });

    it("should create a comment object", (done) => {

        func.createObjectComment(object2)
            .then(result => {


            })
    });


// const require your model doc   
// create a new json object 
// describe the function 
// to contain a subset (new json obj)