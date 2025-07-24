

import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/config';
import librarydataroute from './routes/librarydataroute';
import borrowroute from './routes/borrowroute';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://library-management-system-client-ashy.vercel.app", 
  credentials: true
}));

connectDB();
dotenv.config();





app.use("/api", librarydataroute);
app.use("/api",borrowroute );

app.listen(process.env.port, () => {
  console.log(`Server running on port ${process.env.port}`);
});

app.get("/", (req, res) => {
  res.send("Configured your server successfully");  
});



