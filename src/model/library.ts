import mongoose from "mongoose";


interface IBook {
   serial_id: number;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available: boolean;
    publishedDate: Date;
    
}


const bookSchema = new mongoose.Schema <IBook>(
  {
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

    copies:{
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
    
    
    
  },
  {
    timestamps: true,
    
  }
);


const Book = mongoose.model("Book", bookSchema);

export default Book;
