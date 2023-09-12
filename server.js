// # File responsible for all Aplication back-End.

const { app } = require("./src/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("connect server in localhost:3000");
});
