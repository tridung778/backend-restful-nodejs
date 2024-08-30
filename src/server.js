import express from "express";
import dotenv from "dotenv";
import { configViewEngine } from "./config/viewEngine.js";
import router from "./routes/web.js";
import mysql from "mysql2";

dotenv.config();

const app = express();
const post = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use("/test", router);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hoidanit",
});

// A simple SELECT query
connection.query("select * from users", function (err, results, fields) {
  console.log("Result====>", results); // results contains rows returned by server // fields contains extra meta data about results, if available
});
app.listen(post, hostname, () => {
  console.log(`Server running at http://${hostname}:${post}`);
});
