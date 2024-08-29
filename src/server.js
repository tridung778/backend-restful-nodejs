import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const post = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.render("sample");
});

app.listen(post, hostname, () => {
  console.log(`Server running at http://${hostname}:${post}`);
});
