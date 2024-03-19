const asyncHandler = require("express-async-handler");
const { Expense } = require("../models/expense");
const { Expense_attachment } = require("../models/expense_attachment");
const { Club } = require("../models/club");
const { deleteExpense_attachmentByExpense_id } = require("./expense_attachment.controllers");

// to fetch all Expense
const fetchAllExpense = asyncHandler(async (req, res) => {
  // using findAll method in sequelize
  const rows = await Expense.findAll();
  res.json(rows);
});

// fetching expense for particular club
const fetchExpensebyClubID = asyncHandler(async (req, res) => {
 
  const Club_id = req.params.club_id;

  const rows = await Expense.findAll({ where: { club_id: Club_id,} , order: [['date', 'DESC']]})
  res.json(rows);
});

// adding new expense
const Insert_expense = asyncHandler(async(req,res)=>{
    const Club_id = req.params.club_id ;
    const  Amount = req.params.amount ;
    const  Description = req.params.Description ;
    const obj = {club_id : Club_id , amount : Amount ,description : Description} ;
    
    try {
      const club = await Club.findByPk(Club_id);
      if (club) {  // to check whether the club id is valid
        const obj1 = {budget : club.budget - Amount} ; // subtracting the new expense from the club budget
        const updated_budget = await Club.update(obj1);
        const new_expense = await Expense.create(obj);
        res.status(200).json({ success: true, message: 'expense inserted successfully'});
      } else {
        
        res.status(404).json({ error: "club not found" });
      }
    } catch (error) {
      
      res.status(500).json({ error: "Internal server error" });
    }
    
  
}) ;


// updating the particular expense
const edit_expense = asyncHandler(async(req,res)=>{
  
  const obj = req.body ;

  if(obj.amount){ // if amount is also getting updated
    try {
      const expense = await Expense.findByPk(obj.id);
      if (expense) { // check if the expsese id i valid
        
        try {
          const club = await Club.findByPk(expense.club_id);
            if (club) {  
              const obj1 = {budget : club.budget +expense.amount  - Amount} ; // updating club budget
              const updatedexpense = await expense.update(obj);
              const updated_budget = await Club.update(obj1);
              res.status(200).json({ success: true, message: 'expense updated successfully'});
            } else {
              
              res.status(404).json({ error: "club not found" });
            }
          } 
          catch (error) {
            
            res.status(500).json({ error: "Internal server error" });
          }
        
      } else {
        
        res.status(404).json({ error: "expense not found" });
      }
    } catch (error) {
      
      res.status(500).json({ error: "Internal server error" });
    }
  }
  else{ // if amount i not being updated
    try {
      const expense = await Expense.findByPk(obj.id);
      if (expense) {
        const updatedexpense = await expense.update(obj);
        
      } else {
        
        res.status(404).json({ error: "expense not found" });
      }
    } catch (error) {
      
      res.status(500).json({ error: "Internal server error" });
    }
  }

}) ;

// delete expense bi id (primary key)
const deleteExpenseById = asyncHandler(async(req,res)=>{
  const Expense_id = req.params.id ;
  try{
    // expense attachment refers to expense table , so deleting attachment first
    deleteExpense_attachmentByExpense_id(req,res) ;
    await Expense.destroy({where: {id: Expense_id }}); // deleting expense
    res.status(200).json({ success: true, message: 'expense deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

// delete expense by club id
const deleteExpenseByClub_Id = asyncHandler(async(req,res)=>{
  const Club_id = req.params.club_id ;
  try{
    const rows = await Expense.findAll({ where: { club_id: Club_id,}}) ;

    for (const expense of rows) {
      // deleting attachments first
        await Expense_attachment.destroy({ where: { expense_id: expense.id } });
    }
    // deleting expenses
    await Expense.destroy({where: {club_id: Club_id }});
    res.status(200).json({ success: true, message: 'expense deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;
module.exports = { fetchAllExpense, fetchExpensebyClubID, deleteExpenseById , deleteExpenseByClub_Id , Insert_expense, edit_expense};
