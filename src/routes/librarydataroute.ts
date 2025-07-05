import { Router } from "express";
import { createBook, deleteBook, getAllBooks,editBooks } from "../controllers/bookcontroller";

const router = Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.delete("/books/:id", deleteBook);
router.patch("/edit-books/:id", editBooks);

export default router;
