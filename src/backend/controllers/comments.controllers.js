const asyncHandler = require("express-async-handler");
const { Comment} = require("../models/comment");

// Insert one comment
const createComment = asyncHandler(async (req, res) => {
    const commentData = req.body;
  
    // Create a new comment in the database
    const newComment = await Comment.create(commentData);
    res.json(newComment);
  });
  
  // Bulk insert comments
  const createBulkComments = asyncHandler(async (req, res) => {
    const commentsData = req.body; 
  
    // Bulk create comments in the database
    const newComments = await Comment.bulkCreate(commentsData);
    res.json(newComments);
  });
  
  
  // Update an existing comment
  const updateComment = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    try {
      const comment = await Comment.findByPk(id);
      if (comment) {
        const updatedComment = await comment.update(updatedData);
        res.json(updatedComment);
      } else {
        console.log("Comment not found");
        res.status(404).json({ error: "Comment not found" });
      }
    } catch (error) {
      console.error("Error updating comment:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

const deleteCommentById = asyncHandler(async(req,res)=>{
  const Comment_id = req.params.id ;
  try{
  
    await Comment.destroy({where: {id: Comment_id}});
   
    res.status(200).json({ success: true, message: 'Comment deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteCommentByUser_Id = asyncHandler(async(req,res)=>{
    const User_id = req.params.id ;
    try{
    
      await Comment.destroy({where: {user_id: User_id}});
     
      res.status(200).json({ success: true, message: 'Comment deleted successfully'});
    }
    catch(error){
      res.status(500).json({success : false ,message : "error occured"}) ;
    }
  }) ;

  const deleteCommentByThread_Id = asyncHandler(async(req,res)=>{
    const Thread_id = req.params.id ;
    try{
    
      await Comment.destroy({where: {thread_id: Thread_id}});
     
      res.status(200).json({ success: true, message: 'Comment deleted successfully'});
    }
    catch(error){
      res.status(500).json({success : false ,message : "error occured"}) ;
    }
  }) ;
module.exports = {createComment , createBulkComments , updateComment, deleteCommentById , deleteCommentByUser_Id, deleteCommentByThread_Id};