import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', true);

const connection = async (username, password) => {
  try {
    const URL = process.env.DB_URL;
    await mongoose.connect(
      URL,
      { useNewUrlParser: true },
      { useUnifiedTopology: true }
    );
    console.log("__ Database connected successfully __");
  } catch (error) {
    console.log("Error while connecting with the database: ", error);
  }
};

export default connection;
