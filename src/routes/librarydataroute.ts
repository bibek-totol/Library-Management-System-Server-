import { Router } from "express";
import { createBook, deleteBook, getAllBooks } from "../controllers/bookcontroller";

const router = Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.delete("/books/:id", deleteBook);

export default router;
