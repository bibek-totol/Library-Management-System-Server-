

import dotenv from 'dotenv';
import { Request, Response } from 'express';
import express from 'express';
import { connectDB } from './config/config';
import librarydataroute from './routes/librarydataroute';

const app = express();

app.use(express.json());
connectDB();
dotenv.config();





app.use("/api/librarydata", librarydataroute);

app.listen(process.env.port, () => {
  console.log(`Server running on port ${process.env.port}`);
});



