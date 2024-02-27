const asyncHandler = require("express-async-handler");
const { Membership } = require("../models/membership");


const deleteMembershipByUser_Id = asyncHandler(async(req,res)=>{
    const User_id = req.params.id ;
    try{
    
      await Membership.destroy({where: {user_id: User_id}});
     
      res.status(200).json({ success: true, message: 'Thread deleted successfully'});
    }
    catch(error){
      res.status(500).json({success : false ,message : "error occured"}) ;
    }
  }) ;
  
  const deleteMembershipByClub_Id = asyncHandler(async(req,res)=>{
    const Club_id = req.params.id ;
    try{
    
      await Membership.destroy({where: {club_id: Club_id}});
     
      res.status(200).json({ success: true, message: 'Thread deleted successfully'});
    }
    catch(error){
      res.status(500).json({success : false ,message : "error occured"}) ;
    }
  }) ;


module.exports = { deleteMembershipByUser_Id, deleteMembershipByClub_Id };
