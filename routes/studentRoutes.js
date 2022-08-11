/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const studentClass = require("../models/student_classes");

// Get
router.get("/", (req, res) =>
  studentModel
    .findAll()
    .then((student) => {
      res.json(student).status(200);
      // res.sendStatus(200);
    })
    .catch((err) =>
      console.log(err, () => {
        res.send(err);
      })
    )
);


// Find specific class room 
async function callsom() {
  let class_ = studentClass.name;
  return await studentClass.findOne({
    where: {
      name: "Masri304",
    },
  });
}

router.get("/all", async (req, res) => {
  const project = await callsom();
  res.send(project);
});
module.exports = router;
