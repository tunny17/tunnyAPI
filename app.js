import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDatabase from './config/database.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

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

// this just made the routing easier, the /api/auth is the prefix and the authRoutes file contains the other routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));
