/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const teacherModel = require("../models/teacher");
const teacherAssignedClass = require("../models/teacherassignedclass");

teacherAssignedClass.hasOne(teacherModel, {
  foreignKey: "teacher_id",
});
teacherModel.belongsTo(teacherAssignedClass, {
  foreignKey: "teacher_id",
});

// Get
router.get("/", (req, res) =>
  teacherAssignedClass
    .findAll()
    .then((teacherAssignedClass) => {
      res.json(teacherAssignedClass).status(200);
      // res.sendStatus(200);
    })
    .catch((err) =>
      console.log(err, () => {
        res.send(err);
      })
    )
);

// Delete a teacher  by ID
router.delete("/DeleteByID/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  teacherAssignedClass.findByPk(id).then((teacherAssignedClass) => {
    teacherAssignedClass
      .destroy({
        where: {
          teacher_id: id,
        },
        include: [
          {
            model: teacherModel,
          },
        ],
      })
      .then(() => {
        res.send("Ok"); //Delete Successfully Done
      });
  });
});

// Linke Teacher with class
router.post("/Add", async function (req, res) {
  console.log(req.body);
  teacherAssignedClass
    .create({
      teacher_id: req.body.teacher_id, //req.body.student_id
      class_id: req.body.class_id,
    })
    .then((teacherassignedclass) => res.json(teacherassignedclass))
    .catch((err) => console.log(err));
  console.log(req);
});

// Link Teacher with class
router.patch("/Update/:id", async function (req, res) {
  console.log(req.body);
  const { id } = req.params;
  teacherAssignedClass
    .update(
      {
        teacher_id: req.body.teacher_id, //req.body.student_id
        class_id: req.body.class_id,
      },
      {
        where: {
          teacher_id: id,
        },
      }
    )
    .then((teacherassignedclass) => res.json(teacherassignedclass))
    .catch((err) => console.log(err));
  console.log(req);
});
module.exports = router;
