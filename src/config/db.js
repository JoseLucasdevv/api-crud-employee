//  # the file is responsible for make connection with database.

const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  connectionString: process.env.connect_String_URL,
});

pool.on("error", (err, client) => {
  console.log("Unexpected Error on idle client", err);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("database connect");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
