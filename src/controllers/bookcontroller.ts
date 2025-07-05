import { Request, Response } from "express";
import Book from "../model/library";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books, message: "Success",status:200 } );
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};


export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, genre, isbn, publishedDate, availableCopies } = req.body;

    const newBook = new Book({
      title,
      author,
      genre,
      isbn,
      publishedDate,
      availableCopies,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};
