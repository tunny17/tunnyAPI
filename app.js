import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDatabase from './config/database.js';

// helps use the env constants located in the .env file
dotenv.config();

// connect to database
connectDatabase();

const port = process.env.PORT;

const app = express();

// helps extract the body for specific requests in json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(port, () => console.log(`server running on port ${port}`));
