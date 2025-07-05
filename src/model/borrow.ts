import mongoose from "mongoose";


interface IBorrow {
   serial_id: number;
    title: string;
    isbn: string;
    copies: number;
    available: boolean;
    
    
}


const borrowSchema = new mongoose.Schema <IBorrow>(
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
    
    
    
    
  },
  {
    timestamps: true,
    
  }
);


const Borrow = mongoose.model("Borrow", borrowSchema);

export default Borrow;
