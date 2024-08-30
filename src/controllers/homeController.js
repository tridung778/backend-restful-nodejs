import connection from "../config/database.js";

const getHomePage = (req, res) => {
  return res.render("home");
};

const getExamplePage = (req, res) => {
  res.render("sample");
};

const createUser = (req, res) => {
  console.log('req.body====>', req);

  res.send("create user");
};

export { getHomePage, getExamplePage, createUser };
