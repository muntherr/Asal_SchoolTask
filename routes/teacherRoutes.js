/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const subjectModel = require("../models/teacher");
// Get
router.get("/", (req, res) =>
  subjectModel
    .findAll()
    .then((teacher) => {
      res.json(teacher).status(200);
    })
    .catch((err) =>
      console.log(err, () => {
        res.send(err);
      })
    )
);
module.exports = router;
