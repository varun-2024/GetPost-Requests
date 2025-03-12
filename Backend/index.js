const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;

app.get("/register", (req, res) => {
  console.log("Get Response");
  let { user, password } = req.query;
  res.send(`Standard Get Response, Welcome ${user}`);
});
app.post("/register", (req, res) => {
  console.log("Post Response");
  let { user, password } = req.body;
  console.log(req.body);
  res.send(`Standard Post Response, Welcome ${user}`);
});
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
