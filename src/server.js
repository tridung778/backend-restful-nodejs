import express from "express";
import dotenv from "dotenv";
import { configViewEngine } from "./config/viewEngine.js";
import router from "./routes/web.js";
import connection from "./config/database.js";

dotenv.config();

const app = express();
const post = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// A simple SELECT query
connection.query("select * from users", function (err, results, fields) {
  console.log("Result====>", results); // results contains rows returned by server // fields contains extra meta data about results, if available
});

app.listen(post, hostname, () => {
  console.log(`Server running at http://${hostname}:${post}`);
});
