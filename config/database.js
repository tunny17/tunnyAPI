import mongoose from 'mongoose';

// function that connects the database to mongoDB
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Mongodb!');
  } catch (error) {
    console.log('Connection failed!');
    process.exit(1);
  }
};

export default connectDatabase;
