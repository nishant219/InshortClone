import mongoose from "mongoose";

const connection = async (username, password) => {
  try {
    const URL = `mongodb+srv://testdb:pass%40123@test.znmfw.mongodb.net/test?retryWrites=true&w=majority`;
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
