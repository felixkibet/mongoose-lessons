const router = require("express").Router();
const { getPosts, getPost, createPost, deleteUser } = require("../controllers/controller");

router.get("/", getPosts);

router.get("/:postId", getPost);

router.post("/", createPost );

router.delete('/:postId', deleteUser);

module.exports = router;
