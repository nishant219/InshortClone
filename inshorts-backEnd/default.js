//to load deafult data in database

import { data } from "./constants/data.js";
import news from "./models/news.js";

const defaultData = async () => {
  try {
    await news.deleteMany({}); //to avoid duplication of data in db we are clearing db every time
    await news.insertMany(data);
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
 
export default defaultData;
