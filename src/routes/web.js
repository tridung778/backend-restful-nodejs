import express from "express";
import { getExamplePage, getHomePage } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getHomePage);

router.get("/hello", getExamplePage);

export default router;
