const express = require("express");

// # File responsible for Route api in side back-end

const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    message: "welcome to API Node.js",
  });
});

module.exports = router;
