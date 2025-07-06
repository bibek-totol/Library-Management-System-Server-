"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    serial_id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    copies: {
        type: Number,
        required: true,
        default: 0,
    },
    available: {
        type: Boolean,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});
const Book = mongoose_1.default.model("Book", bookSchema);
exports.default = Book;
