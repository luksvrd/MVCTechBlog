const router = require("express").Router();

const userRoutes = require("./user-route.js");
const postRoutes = require("./post-route.js");
const commentRoutes = require("./comment-route.js");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
