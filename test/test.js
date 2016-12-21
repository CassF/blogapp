const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const insert = require('chai').assert;
const Functions = require("../functions");
const func = new Functions();


describe("Admin", () => {
    it("should show all blogs", (done) => {
        let array = ["b1", "b2", "b3", "b4"];
        func.showBlogA(array)
            .then(result => {
                result.should.be.equal(["b1", "b2", "b3", "b4"]);
                done();
            })
    });

    it("should create a blog post", (done) => {
        let array1 =[{blogTitle:"Blog1", blogContent:"Blog Content 1"}, {blogTitle:"Blog2", blogContent:"Blog Content 2"}];
        func.createBlog(array1)
            .then(result => {
                expect(array1).to.include({blogTitle:"Blog3", blogContent:"Blog Content 3"});
                done();
            })
    });

    it("should delete a blog post", (done) => {
        let array2 =[{blogTitle:"Blog1", blogContent:"Blog Content 1"}, {blogTitle:"Blog2", blogContent:"Blog Content 2"}, {blogTitle:"Blog3", blogContent:"Blog Content 3"}];
        func.deleteBlog(array2) 
            .then(result => {
                expect(array2).to.notInclude({blogTitle:"Blog3", blogContent:"Blog Content 3"});
                done();
            })
});

describe("User", () => {
    it("should show all blogs", (done) => {
        let array = [1, 2, 3, 4];
        func.showBlog(array)
            .then(result => {
                expect(array).to.include(2);
                done();
            })
    });

    it("should show one blog posts", (done) => {
        func.showOneBlog("foobar")
            .then(result => {
                expect(result).to.contain("foo");
                done();
            })
    });

    it("should add a comment to a blog post", (done) => {
        let array = ["c1", "c2", "c3", "c4"];
        func.addComment(array)
            .then(result => {
                expect(array).to.include("c5");
                done();
            })
    });
});
});