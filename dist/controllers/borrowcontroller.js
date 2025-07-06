"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBorrow = exports.deleteBorrow = exports.createBorrow = exports.getBorrowSummary = void 0;
const borrow_1 = __importDefault(require("../model/borrow"));
const getBorrowSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrows = yield borrow_1.default.find();
        res.status(200).json(borrows);
    }
    catch (err) {
        res.status(500).json({ message: "Server Error", error: err });
    }
});
exports.getBorrowSummary = getBorrowSummary;
const createBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serial_id, title, isbn, copies, available, quantity, due_date } = req.body;
        const newBorrow = new borrow_1.default({
            serial_id,
            title,
            isbn,
            copies,
            available,
            quantity,
            due_date
        });
        const savedBorrow = yield newBorrow.save();
        res.status(201).json(savedBorrow);
    }
    catch (err) {
        res.status(400).json({ message: "Invalid data", error: err });
    }
});
exports.createBorrow = createBorrow;
const deleteBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedBook = yield borrow_1.default.deleteOne({ serial_id: id });
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error", error: err });
    }
});
exports.deleteBorrow = deleteBorrow;
const editBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, isbn, quantity } = req.body;
        console.log(id);
        const updatedBorrow = yield borrow_1.default.findOneAndUpdate({ serial_id: Number(id) }, { $set: { title, isbn, quantity } }, { new: true });
        if (!updatedBorrow) {
            return res.status(404).json({ message: "Borrow not found" });
        }
        res.status(200).json({
            message: "Borrow updated successfully",
            updatedBorrow
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error", error: err });
    }
});
exports.editBorrow = editBorrow;
