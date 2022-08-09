/*
 *
 *This file will include all the routes for the student table.
 *
 */
const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const classModel = require("../models/class");
// Get
router.get("/", (req, res) =>
  classModel
    .findAll()
    .then((classes) => {
      res.json(classes).status(200);
      // res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);
module.exports = router;
