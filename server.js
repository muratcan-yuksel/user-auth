const express = require("express");
const app = express();
//require hashing library
const bcrypt = require("bcrypt");

app.use(express.json());

//normally you'd get this via a database, but for heuristic purposes, I'm gonna create it myself
const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

//create users
app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(salt);
    console.log(hashedPassword);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
