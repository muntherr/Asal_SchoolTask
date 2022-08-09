/*
 *
 *This file will include all the routes for the student table.
 *
 */

 const express = require("express");
 const router = express.Router(); // Used to create a new router object to handling a request
 const db = require("../config/database");
 const subjectModel = require("../models/teacherassignedcourse");
 // Get
 router.get("/", (req, res) =>
   subjectModel
     .findAll()
     .then((teacherassignedcourse) => {
       res.json(teacherassignedcourse).status(200);
       // res.sendStatus(200);
     })
     .catch((err) =>
       console.log(err, () => {
         res.send(err);
       })
     )
 );
 module.exports = router;
 