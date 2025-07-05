import mongoose from "mongoose";


interface IBook {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    publishedDate: Date;
    availableCopies: number;
}


const bookSchema = new mongoose.Schema <IBook>(
  {
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
    publishedDate: {
      type: Date,
    },
    availableCopies: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);


const Book = mongoose.model("Book", bookSchema);

export default Book;
