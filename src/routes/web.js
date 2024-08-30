import express from "express";
import { getExamplePage, getHomePage, createUser } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getHomePage);

router.get("/hello", getExamplePage);

router.post("/create-user", createUser);

export default router;
