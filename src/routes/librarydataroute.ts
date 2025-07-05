import { Router } from "express";
import { createBook, getAllBooks } from "../controllers/bookcontroller";
const router = Router();

router.get("/", getAllBooks);
router.post("/", createBook);

export default router;