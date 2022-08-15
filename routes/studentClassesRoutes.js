/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const studentClass = require("../models/student_classes");
const Class = require("../models/class");
const res = require("express/lib/response");
const studentClassOP = { studentClass };
const { append } = require("express/lib/response");

Class.hasOne(studentClass, {
  foreignKey: "name",
});
studentClass.belongsTo(Class, {
  foreignKey: "name",
});

// Get defualt end point
router.get("/", (req, res) =>
  studentClass
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

// Find specific class room
async function specClass() {
  let class_ = studentClassOP.name;
  return await studentClass.findOne({
    where: {
      name: "Masri304",
    },
  });
}

router.get("/all", async (req, res) => {
  // Return all info about the studentclass table
  const result = await specClass();
  res.send(result);
});

// Find all information between the classes and the student class
async function AllInfo() {
  return await studentClass.findAll({
    include: [
      {
        model: Class,
      },
    ],
  });
}
router.get("/AllSC", async (req, res) => {
  // Return all information between the class and student class table
  let result = await AllInfo();
  res.json(result).status(200);
});

// Create a new record to the table
router.post("/ClassLink", async function (req, res) {
  console.log(req.body);

  studentClass
    .create({
      student_id: req.body.student_id, //req.body.student_id
      name: req.body.name,
      date_from: req.body.date_from,
      date_to: req.body.date_to,
    })
    .then((student_classes) => res.json(student_classes))
    .catch((err) => console.log(err));
  console.log(req);
});

// Search by student_ID
router.get("/SearchByID/:id", (req, res) => {
  let { id } = req.params;
  studentClass
    .findAll({
      where: {
        student_id: id,
      },
    })
    .then((studentClassOP) => {
      res.json(studentClassOP);
    });
});

// Search by student_ID
// Here I have two PK's so i used a normal findAll method
//  If i have a one PK i can use findByPk
router.get("/SearchByID/:id/:name", (req, res) => {
  let id = req.params.id;

  let name = req.params.name;
  console.log(id + name);
  studentClass
    .findAll({
      where: {
        student_id: id,
        name: name,
      },
    })
    .then((studentClassOP) => {
      if (studentClassOP) {
        res.json(studentClassOP);
      } else {
        res.status(404).send();
      }
    });
});

module.exports = router;
