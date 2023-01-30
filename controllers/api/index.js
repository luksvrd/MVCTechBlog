const router = require("express").Router();

const commentRoutes = require("./comment-route.js");
const postRoutes = require("./post-route.js");
const userRoutes = require("./user-route.js");

router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
