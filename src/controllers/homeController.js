const getHomePage = (req, res) => {
  res.send("Hello world");
};

const getExamplePage = (req, res) => {
  res.render("sample");
};

export { getHomePage, getExamplePage };
