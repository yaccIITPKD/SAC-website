const asyncHandler = require("express-async-handler");
const { Membership} = require("../models/membership");

// Insert one membership
const createMembership = asyncHandler(async (req, res) => {
    const membershipData = req.body;
  
    // Create a new membership in the database
    const newMembership = await Membership.create(membershipData);
    res.json(newMembership);
  });
  
  // Bulk insert memberships
  const createBulkMemberships = asyncHandler(async (req, res) => {
    const membershipsData = req.body; 
  
    // Bulk create memberships in the database
    const newMemberships = await Membership.bulkCreate(membershipsData);
    res.json(newMemberships);
  });
  
  
  // Update an existing membership
  const updateMembership = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    try {
      const membership = await Membership.findByPk(id);
      if (membership) {
        const updatedMembership = await membership.update(updatedData);
        res.json(updatedMembership);
      } else {
        console.log("Membership not found");
        res.status(404).json({ error: "Membership not found" });
      }
    } catch (error) {
      console.error("Error updating membership:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
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


module.exports = {createMembership , createBulkMemberships , updateMembership, deleteMembershipByUser_Id, deleteMembershipByClub_Id };

