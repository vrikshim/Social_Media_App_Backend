const express=require("express");
const {createPost,likeAndUnlikePost,deletePost,getPostOfFollowing, updateCaption,  commentOnPost, deleteComment}=require("../controllers/post");
const {isAuthenticated}=require("../middlewares/auth")
const router=express.Router();
router.route("/post/upload").post(isAuthenticated,createPost);
//router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost);
router
.route("/post/:id")
.get(isAuthenticated,likeAndUnlikePost)
.put(isAuthenticated,updateCaption)
.delete(isAuthenticated,deletePost)
// this is something we are destined to belong to in the mine field 
// we are looking for something good in the vicinity f
// this is not something we are use to do so in the life we are given by the god s
router.route("/posts").get(isAuthenticated,getPostOfFollowing)

router.route("/post/comment/:id").put(isAuthenticated,commentOnPost).delete(isAuthenticated,deleteComment)
module.exports=router;
 
// 