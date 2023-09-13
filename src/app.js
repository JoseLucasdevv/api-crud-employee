// # file responsible for connect server.js

const express = require("express");
const cors = require("cors");
const route = require("./Routers/router");

const app = express();

// middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
// routes Api
app.use(route);

module.exports = {
  app,
};
