const express = require("express");
const app = express();

app.use(express.json());

//normally you'd get this via a database, but for heuristic purposes, I'm gonna create it myself
const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

//create users
app.post("/users", (req, res) => {
  //we'll create the users
  //hash the passes
  //and save them in the users constant
  const user = { name: req.body.name, password: req.body.password };
  users.push(user);
  res.status(201).send();
});

app.listen(3000);
