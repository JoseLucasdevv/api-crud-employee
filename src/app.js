// # file responsible for connect server.js

const express = require("express");
const cors = require("cors");

const app = express();

// middlewares

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));

module.exports = {
  app,
};
