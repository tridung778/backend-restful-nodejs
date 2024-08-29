import expess from "express";
import path from "path";

const app = expess();
const post = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.render("sample");
});

app.listen(post, () => {
  console.log(`Server running on port ${post}!`);
});
