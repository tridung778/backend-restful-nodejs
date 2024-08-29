import expess from "express";
const app = expess();
const post = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(post, () => {
  console.log(`Server running on port ${post}!`);
});
