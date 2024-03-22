const asyncHandler = require("express-async-handler");
const { Expense } = require("../models/expense");
const { Expense_attachment } = require("../models/expense_attachment");

// fetching attachments by expense id
const fetchExpense_AttachmentbyExpense_id = asyncHandler(async (req, res) => {
 
  const Expense_id = req.params.id;
  const attachments = await Expense_attachment.findAll({ where: { expense_id: Expense_id,}});
  res.json(rows);
});

// creating new attachment
const Insert_expense_attachment = asyncHandler(async(req,res)=>{
    const newAttachment = req.body ;
    
    try {
      const expense = await Expense.findByPk(newAttachment.expense_id);
      if (expense) { // checking if expense id is valid
        const new_expense_attachement = await Expense_attachment.create(newAttachment); // inserting in table
        res.status(200).json({ success: true, message: 'Expense_attachment inserted successfully'});
      } else {
        
        res.status(404).json({ error: "Expense not found" });
      }
    } catch (error) {
      
      res.status(500).json({ error: "Internal server error" });
    }
    
  
}) ;

// updating  attachment
const edit_Attachment = asyncHandler(async(req,res)=>{
  
  const updateAttachment = req.body ;

  try {
    const attachment = await Expense_attachment.findByPk(updateAttachment.id);
    const updatedAttachmentInfo = await attachment.update(updateAttachment);
    
  } catch (error) {
    
    res.status(500).json({ error: "Internal server error" });
  }

}) ;

// deleting attachment by expense id
const deleteExpense_attachmentByExpense_id = asyncHandler(async(req,res)=>{
  const Expense_id = req.params.expense_id ;
  try{
    await Expense_attachment.destroy({where: {expense_id: Expense_id }});
    res.status(200).json({ success: true, message: 'Attachment deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

// deleting attacment by id(primary key)
const deleteAttachmentById = asyncHandler(async(req,res)=>{
    const ID = req.params.id ;
    try{
      await Expense_attachment.destroy({where: {id: ID }});
      res.status(200).json({ success: true, message: 'Attachment deleted successfully'});
    }
    catch(error){
      res.status(500).json({success : false ,message : "error occured"}) ;
    }
}) ;
module.exports = { fetchExpense_AttachmentbyExpense_id, Insert_expense_attachment, edit_Attachment,deleteExpense_attachmentByExpense_id , deleteAttachmentById };
