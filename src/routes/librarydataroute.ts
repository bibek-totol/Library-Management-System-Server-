import { Router } from "express";
import { createBook, deleteBook, getAllBooks,editBooks } from "../controllers/bookcontroller";

const router = Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.delete("/books/:id", async (req, res) => {
    await  deleteBook(req, res);
});
router.patch("/edit-books/:id", async(req, res) => {
    await  editBooks(req, res);
});

export default router;
