const asyncHandler = require("express-async-handler");

const { Comment } = require("../models/comment");

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
module.exports = {deleteCommentById , deleteCommentByUser_Id, deleteCommentByThread_Id};
