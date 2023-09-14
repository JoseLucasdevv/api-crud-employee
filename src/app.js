// # file responsible for connect server.js

// imports libs and files.

const express = require("express");
const cors = require("cors");
const route = require("./Routers/router");
const routeApi = require("./Routers/index");
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
app.use(routeApi);

// export app to server.js file !
module.exports = {
  app,
};
