import express from "express";
import { getExamplePage, getHomePage } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getExamplePage);

router.get("/hello", getHomePage);

export default router;
