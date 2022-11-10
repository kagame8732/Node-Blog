let express = require("express");
let router = express.Router();
let blogController = require("../controllers/blogController");

router.get("/blogs", blogController.blog_index);
router.post("/blogs", blogController.blog_create_post);
router.get("/blogs/:id", blogController.blog_details);
router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
