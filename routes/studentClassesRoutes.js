/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const studentClassModel = require("../models/student_classes");
// Get
router.get("/", (req, res) =>
  studentClassModel
    .findAll()
    .then((student_classes) => {
      res.json(student_classes).status(200);
      // res.sendStatus(200);
    })
    .catch((err) =>
      console.log(err, () => {
        res.send(err);
      })
    )
);
module.exports = router;
