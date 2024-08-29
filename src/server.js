import express from "express";
import dotenv from "dotenv";
import { configViewEngine } from "./config/viewEngine.js";
import router from "./routes/web.js";

dotenv.config();

const app = express();
const post = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use("/test", router);

app.listen(post, hostname, () => {
  console.log(`Server running at http://${hostname}:${post}`);
});
