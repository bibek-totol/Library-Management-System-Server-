import { Router } from "express";
import { createBorrow, deleteBorrow, editBorrow, getBorrowSummary } from "../controllers/borrowcontroller";

const router = Router();


router.get("/borrowsummary", getBorrowSummary);
router.post("/borrow", createBorrow);
router.delete("/borrow/:id", async (req, res) => {
    await deleteBorrow(req, res);
  });

router.patch("/edit-borrowsummary/:id", async(req, res) => {
    await editBorrow(req, res);
});

export default router;


