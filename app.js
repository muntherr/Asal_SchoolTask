const express = require("express");
const path = require("path");

const app = express();
//Create a server
const port = process.env.port || 3000;
app.get("/", (req, res) => res.send("INDEX"));
app.listen(port, console.log(`Server started on port ${port}`));
//DataBase
const db = require("./config/database");

// Test DataBase Connection
db.authenticate()
  .then(() => console.log("DataBase connected .. "))
  .catch((err) => console.log("Error: " + err));

// const { Client } = require("pg");

// const pgDB = new Client({
//   host: `localhost`,
//   user: `postgres`,
//   password: "7262",
//   database: "Mon_School",
// });
// pgDB.on("connecnt", () => {
//   console.log("DataBase connection");
// });

// pgDB.on("end", () => {
//   console.log("Connnection end");
// });
// module.exports = pgDB;
