const express = require("express");
const { connect } = require("./db/connection");
const cors = require("cors");
const { get, getOne, post, put, remove } = require("./db/methods");

const app = express();
const corsOptions = {
  origin: "https://lucasgithubx.github.io/express_crud_mongodb.com",
};

app.use(express.json());
app.use(cors(corsOptions));
connect();

app.get("/posts", (req, res) => {
  get(res);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  getOne(res, id);
});

app.post("/posts", (req, res) => {
  const body = req.body;
  post(res, body);
});

app.put("/posts/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  put(res, id, body);
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  remove(res, id);
});

app.listen(3000);
console.log("server has been established on port 3000");
