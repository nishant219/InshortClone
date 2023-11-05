import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', true);

const connection = async (username, password) => {
  try {
    const URL = `mongodb+srv://testdb:pass%40123@test.znmfw.mongodb.net/test?retryWrites=true&w=majority`;
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
