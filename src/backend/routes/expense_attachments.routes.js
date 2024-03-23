const express = require("express");
const router = express.Router();

const {
    fetchExpense_AttachmentbyExpense_id, Insert_expense_attachment, edit_Attachment,deleteExpense_attachmentByExpense_id , 
    deleteAttachmentById
} = require("../controllers/expense_attachment.controllers");

//routes for fetching all announcements and announcement by id
router.route("/:id").get(fetchExpense_AttachmentbyExpense_id);
router.route("/createExpressAttachment").get(Insert_expense_attachment);
router.route("/updateExpenseAttachment").get(edit_Attachment);
router.route("/delete/:expense_id").get(deleteExpense_attachmentByExpense_id);
router.route("/delete/:id").get(deleteAttachmentById);

module.exports = router;