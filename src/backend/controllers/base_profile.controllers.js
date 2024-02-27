const asyncHandler = require("express-async-handler");
const { Announcement } = require("../models/announcement");
const {Base_profile} = require("../models/base_profile");
const {User} = require("../models/user");
const {Club} = require("../models/club");


const deletebase_profileById = asyncHandler(async(req,res)=>{
  const base_profileid = req.params.id ;
  try{
    await Club.destroy({where: {base_profile_id: base_profileid}});
    await User.destroy({where: {base_profile_id: base_profileid}});
    await Announcement.destroy({where: {user_id: base_profileid}});
    await Base_profile.destroy({where: {id: base_profileid}});

    res.status(200).json({ success: true, message: 'profile deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;
module.exports = {deletebase_profileById};
