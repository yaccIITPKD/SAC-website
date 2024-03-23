const express = require("express");
const router = express.Router();

const {
    fetchAllExpense, fetchExpensebyClubID, deleteExpenseById , deleteExpenseByClub_Id , Insert_expense, edit_expense
} = require("../controllers/expense.controllers");

//routes for fetching all announcements and announcement by id
router.route("/").get(fetchAllExpense);
router.route("/club_id").get(fetchExpensebyClubID);
router.route("/delete/:id").get(deleteExpenseById);
router.route("/delete/:club_id").get(deleteExpenseByClub_Id);
router.route("/expenseCreate").get(Insert_expense);
router.route("/expenseUpdate").get(edit_expense);
module.exports = router;