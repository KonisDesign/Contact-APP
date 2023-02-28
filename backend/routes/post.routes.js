const express = require("express");
const { setPosts, getPosts, editPost, deletePost, favPost } = require("../controllers/post.controllers");
const router = express.Router();

router.get("/", getPosts)

router.post("/new", setPosts)

router.put("/:id", editPost)

router.delete("/:id", deletePost)

module.exports = router;