"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const borrowSchema = new mongoose_1.default.Schema({
    serial_id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
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
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    due_date: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const Borrow = mongoose_1.default.model("Borrow", borrowSchema);
exports.default = Borrow;
