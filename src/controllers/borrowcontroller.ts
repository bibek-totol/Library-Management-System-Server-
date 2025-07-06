import { Request, Response } from "express";
import Borrow from "../model/borrow";

export const getBorrowSummary = async (req: Request, res: Response) => {
  try {
    const borrows = await Borrow.find();
    res.status(200).json(borrows);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};


export const createBorrow = async (req: Request, res: Response) => {
  try {
    const { serial_id,title, isbn, copies,available, quantity,due_date } = req.body;
    
    
   

    const newBorrow = new Borrow({
      serial_id,
      title,
      isbn,
      copies,
      available,
      quantity,
      due_date
      
     
     
    });

    const savedBorrow = await newBorrow.save();
    res.status(201).json(savedBorrow);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

export const deleteBorrow = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedBook = await Borrow.deleteOne({ serial_id: id });
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err });
    }
  };


  export const editBorrow = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, isbn, quantity } = req.body;
      console.log(id);
      const updatedBorrow = await Borrow.findOneAndUpdate( { serial_id: Number(id )} , 
        { $set: { title, isbn, quantity } }
        , { new: true });
      if (!updatedBorrow) {
        return res.status(404).json({ message: "Borrow not found" });
      }
      res.status(200).json({
        message: "Borrow updated successfully",
        updatedBorrow
      });
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err });
    }
  };
