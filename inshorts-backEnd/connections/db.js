import mongoose from "mongoose";

const connection = async (username, password) => {
  try {
    const URL = ``;
    await mongoose.connect(
      URL,
      { useNewUrlParser: true },
      { usecreateIndex: true },
      { useUnifiedTopology: true },
      { useFindAndModify: false }
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database: ", error);
  }
};

export default connection;
