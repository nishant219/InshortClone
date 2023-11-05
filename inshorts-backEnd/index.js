import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

//components
import connection from "./connections/db.js";
import defaultData from "./default.js";
//route
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//to initialised route (default route- '/')
app.use('/', Route);

const port = 7000;

await connection();


app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});

//we are using this default fun to import data in database
//we are importing default constant data from constants folder 

defaultData();
