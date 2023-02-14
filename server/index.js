const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuidv4 = require("uuid/v4");

const app = express();
const port = 8000;

let todos = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todoText = req.body;

  const newTodo = { id: uuidv4(), text: todoText };
  console.log(newTodo);
  todos.push(newTodo);

  res.send("Todo is added to the database");
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;

  todos = todos.filter((todo) => todo.id === todoId);

  res.send("Todo is deleted");
});

app.listen(port, () =>
  console.log(`The app is listening on a port ${port}!`)
);
