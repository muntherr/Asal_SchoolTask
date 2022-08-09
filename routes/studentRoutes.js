/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const studentModel = require("../models/student");
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
module.exports = router;
