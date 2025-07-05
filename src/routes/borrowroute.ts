import { Router } from "express";
import { createBorrow, deleteBorrow, editBorrow, getBorrowSummary } from "../controllers/borrowcontroller";

const router = Router();


router.get("/borrowsummary", getBorrowSummary);
router.post("/borrow", createBorrow);
router.delete("/borrow/:id", deleteBorrow);

router.patch("/edit-borrowsummary/:id", editBorrow);

export default router;


