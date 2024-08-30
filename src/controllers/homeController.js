import connection from "../config/database.js";

const getHomePage = (req, res) => {
  // A simple SELECT query
  connection.query("select * from users", function (err, results, fields) {
    console.log("Result====>", results);
    res.send(JSON.stringify(results));
  });
};

const getExamplePage = (req, res) => {
  res.render("sample");
};

export { getHomePage, getExamplePage };
