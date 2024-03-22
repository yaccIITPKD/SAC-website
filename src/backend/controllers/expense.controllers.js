const asyncHandler = require("express-async-handler");
const { Expense } = require("../models/expense");
const { Expense_attachment } = require("../models/expense_attachment");
const { Club } = require("../models/club");
const { deleteExpense_attachmentByExpense_id } = require("./expense_attachment.controllers");

// to fetch all Expense
const fetchAllExpense = asyncHandler(async (req, res) => {
  // using findAll method in sequelize
  const allExpenses  = await Expense.findAll();
  res.json(allExpenses );
});

// fetching expense for particular club
const fetchExpensebyClubID = asyncHandler(async (req, res) => {
 
  const Club_id = req.params.club_id;

  const expenses  = await Expense.findAll({ where: { club_id: Club_id,} , order: [['date', 'DESC']]})
  res.json(expenses );
});

// adding new expense
const Insert_expense  = asyncHandler(async(req,res)=>{
    const clubId   = req.body.club_id ;
    const  amount  = req.body.amount ;
    const  description  = req.body.Description ;
    const newExpense = {club_id : clubId  , amount : amount ,description : description} ;
    
    try {
      const club = await Club.findByPk(clubId);
      if (club) {  // to check whether the club id is valid
        const newBudget = {budget : club.budget - amount} ; // subtracting the new expense from the club budget
        const updatedBudget  = await Club.update(newBudget);
        const newExpenseInfo  = await Expense.create(newExpense);
        res.status(200).json({ success: true, message: 'expense inserted successfully'});
      } else {
        
        res.status(404).json({ error: "club not found" });
      }
    } catch (error) {
      
      res.status(500).json({ error: "Internal server error" });
    }
    
  
}) ;


// updating the particular expense
const edit_expense  = asyncHandler(async(req,res)=>{
  
  const updatedExpense = req.body ;

  if(updatedExpense.amount){ // if amount is also getting updated
    try {
      const expense = await Expense.findByPk(updatedExpense.id);
      if (expense) { // check if the expsese id i valid
        
        try {
          const club = await Club.findByPk(expense.club_id);
            if (club) {  
              const updatedBudget = {budget : club.budget +expense.amount  - Amount} ; // updating club budget
              const updatedExpenseinfo = await expense.update(updatedExpense);
              const updatedBudgetinfo = await Club.update(updatedBudget);
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
  else{ // if amount is not being updated
    try {
      const expense = await Expense.findByPk(updatedExpense.id);
      if (expense) {
        const updatedExpenseInfo = await expense.update(updatedExpense);
        
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
  const ExpenseId = req.params.id ;
  try{
    // expense attachment refers to expense table , so deleting attachment first
    deleteExpense_attachmentByExpense_id(req,res) ;
    await Expense.destroy({where: {id: ExpenseId }}); // deleting expense
    res.status(200).json({ success: true, message: 'expense deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

// delete expense by club id
const deleteExpenseByClub_Id  = asyncHandler(async(req,res)=>{
  const ClubId = req.params.club_id ;
  try{
    const expenses = await Expense.findAll({ where: { club_id: ClubId,}}) ;

    for (const expense of expenses) {
      // deleting attachments first
        await Expense_attachment.destroy({ where: { expense_id: expense.id } });
    }
    // deleting expenses
    await Expense.destroy({where: {club_id: ClubId }});
    res.status(200).json({ success: true, message: 'expense deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;
module.exports = { fetchAllExpense, fetchExpensebyClubID, deleteExpenseById , deleteExpenseByClub_Id  , Insert_expense , edit_expense };
