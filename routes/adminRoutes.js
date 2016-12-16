//NPM Modules - No relative path as they are in node_modules
const express = require("express");
const router = express.Router();
//These are my own modules that require a relative path to find them (As they are not included in the node_modules folder. And nor should they be)
const adminController = require("../controllers/adminController");

//We are calling a functions on router in this case .post() and .delete(), which are the HTTP verb, and that takes 2 arguments.
//1 is the path (from the url), the 2nd is the function to call
router.post("/create", adminController.createBlog);
router.delete("/delete", adminController.deleteBlog);

//This just exports the router object so that it can be used elsewhere
module.exports = router;