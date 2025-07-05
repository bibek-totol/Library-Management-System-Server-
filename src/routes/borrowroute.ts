import { Router } from "express";
import { createBorrow, deleteBorrow, getBorrowSummary } from "../controllers/borrowcontroller";

const router = Router();


router.get("/borrowsummary", getBorrowSummary);
router.post("/borrow", createBorrow);
router.delete("/borrow/:id", deleteBorrow);

export default router;


