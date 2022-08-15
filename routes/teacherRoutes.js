/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
// const { where, Sequelize } = require("../config/database");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const teacherModel = require("../models/teacher");
const teacherassignedcourse = require("../models/teacherAssignedClass");
const sequelize = require("sequelize");
const { send } = require("express/lib/response");
const { where } = require("../config/database");
// const { Op } = sequelize;
const app = express();

teacherModel.hasOne(teacherassignedcourse, {
  foreignKey: "teacher_id",
});

// Get
router.get("/", (req, res) =>
  teacherModel
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

// Find all teachers information
async function AllInfo() {
  return await teacherModel.findAll({
    include: [
      {
        model: Class,
      },
    ],
  });
}
router.get("/All", async (req, res) => {
  let result = await AllInfo();
  res.json(result).status(200);
});
// Add  a new teacher
router.post("/", async function (req, res) {
  console.log(req.body);
  teacherModel
    .create({
      teacher_id: req.body.teacher_id, //req.body.student_id
      teacher_name: req.body.teacher_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    })
    .then((teacher) => res.json(teacher))
    .catch((err) => console.log(err));
  console.log(req);
});

// Search by student_ID
router.get("/search/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  teacherModel
    .findAll({
      where: {
        teacher_id: id,
        $or: [
          { email: id }, //req.body.email },
          { phone: id }, //req.body.phone },
          { address: id }, //req.body.address },
        ],
      },
    })
    .then((teacher) => {
      res.json(teacher);
    });
});
// /searchBy/type = phone
router.get("/searchSp", (req, res) => {
  let { id } = req.params;
  let filter = {};
  let { q } = req.query;
  teacherModel
    .findAll({
      where: {
        teacher_name: {
          //  [sequelize.Op.like]: `${q}%`,
        },
      },
    })
    .then((teacher) => {
      res.json(teacher);
    });
});

// Delete a teacher  by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  teacherModel.findByPk(id).then((teacher) => {
    teacherModel
      .destroy({
        where: {
          teacher_id: id,
          // [sequelize.Op.and]: [{ model.teacher_id: 2 }],
        },
        include: [
          {
            model: teacherassignedcourse,
          },
        ],
      })
      .then(() => {
        res.send("Ok"); //Delete Successfully Done
      });
  });
});

// Update the data
router.patch("/:id", async function (req, res) {
  console.log(req.body);
  const { id } = req.params;
  teacherModel
    .update(
      {
        teacher_id: req.body.teacher_id, //req.body.student_id
        teacher_name: req.body.teacher_name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
      },
      {
        where: {
          teacher_id: id,
        },
      }
    )
    .then((teacher) => res.json(teacher))
    .catch((err) => console.log(err));
  console.log(req);
});

module.exports = router;
