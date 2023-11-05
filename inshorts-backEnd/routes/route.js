import express, { Router } from "express";
import { getNews } from "../controller/news-controller.js";

// const route = express.Router();
const router=express.Router();

// route.get("/news", getNews);
router.route("/news").get(getNews);

export default router;


