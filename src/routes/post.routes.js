const { Router } = require("express");
const { createPost, listPosts } = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, createPost);
router.get("/", listPosts); 

module.exports = router;
