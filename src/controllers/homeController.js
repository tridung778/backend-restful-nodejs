import connection from "../config/database.js";

const getHomePage = (req, res) => {
  return res.render("home");
};

const getExamplePage = (req, res) => {
  res.render("sample");
};

export { getHomePage, getExamplePage };
