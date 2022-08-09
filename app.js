const express = require("express");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");
//Create a server
const port = process.env.port || 3000;
app.get("/", (req, res) => res.send("INDEX"));
app.listen(port, console.log(`Server started on port ${port}`));
// Students Routes
app.use("/student", require("./routes/studentRoutes"));
// Class Routes
app.use("/class", require("./routes/classRoutes"));
// Students Routes
app.use("/homework", require("./routes/homeworkRoutes"));
// Course Routes
app.use("/studentClasses", require("./routes/studentClassesRoutes"));
// Class Routes
app.use("/subject", require("./routes/subjectRoutes"));
// Class Routes
app.use("/TAC", require("./routes/teacherassignedcourseRoutes"));

app.use("/teacher", require("./routes/teacherRoutes"));

//DataBase
const db = require("./config/database");

// Test DataBase Connection
db.authenticate()
  .then(() => console.log("DataBase connected .. "))
  .catch((err) => console.log("Error: " + err));
