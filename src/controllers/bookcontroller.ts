import { Request, Response } from "express";
import Book from "../model/library";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};


export const createBook = async (req: Request, res: Response) => {
  try {
    const { serial_id,title, author, genre, isbn, copies,available } = req.body;
    const publishedDate = new Date();

    const newBook = new Book({
      serial_id,
      title,
      author,
      genre,
      isbn,
      copies,
      available,
      publishedDate
     
     
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.deleteOne({ serial_id: id });
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};



export const editBooks = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, genre, isbn, copies } = req.body;
    console.log(id);
    const updatedBorrow = await Book.findOneAndUpdate( { serial_id: Number(id )} , 
      { $set: { title, author, genre, isbn, copies } }
      , { new: true });
    if (!updatedBorrow) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({
      message: "Book updated successfully",
      updatedBorrow
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

