import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();
const post = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.render("sample");
});

app.listen(post, hostname, () => {
  console.log(`Server running at http://${hostname}:${post}`);
});
