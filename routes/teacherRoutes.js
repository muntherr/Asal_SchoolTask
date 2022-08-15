/*
 *
 *This file will include all the routes for the student table.
 *
 */

const express = require("express");
const router = express.Router(); // Used to create a new router object to handling a request
const db = require("../config/database");
const teacherModel = require("../models/teacher");
const teacherassignedcourse = require("../models/teacherAssignedClass");
const sequelize = require("sequelize");
const { send } = require("express/lib/response");
const { where } = require("../config/database");
const app = express();

teacherModel.hasMany(teacherassignedcourse, {
  foreignKey: "teacher_id",
});
/***************************************** SHOW ALL TEACHERS INFORMATION******************************************/

async function AllInfo() {
  return await teacherModel.findAll({
    include: [
      {
        model: teacherassignedcourse,
      },
    ],
  });
}
router.get("/", async (req, res) => {
  let result = await AllInfo();
  res.json(result).status(200);
});

/***************************************** ADD NEW TEACHER ******************************************/
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
    .then((teacher) => res.json(teacher).status(200))
    .catch((err) => console.log(err));
  console.log(req);
});

/***************************************** SEARCH BY TEACHER ID ******************************************/
router.get("/:id", (req, res) => {
  let { id } = req.params.id;
  console.log(req.query);
  console.log(req.query.value);
  console.log(Object.entries(req.params));
  let str = Object.values(req.params)[0];
  let ans;
  console.log("---", str);

  if (str.charAt(0) === '"' && str.charAt(str.length - 1) === '"') {
    ans = str.substr(1, str.length - 2);
  }
  console.log(`----------->`, ans);

  // teacherModel
  //   .findAll({
  //     where: {
  //       teacher_id: id,
  //       // $or: [
  //       //   { email: id }, //req.body.email },
  //       //   { phone: id }, //req.body.phone },
  //       //   { address: id }, //req.body.address },
  //       // ],
  //     },
  //   })
  //   .then((teacher) => {
  //     res.json(teacher);
  //   });
});
/***************************************** DELETE A TEACHER BY ID ******************************************/
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  teacherModel.findByPk(id).then((teacher) => {
    teacherModel
      .destroy({
        where: {
          teacher_id: id,
        },
        include: [
          {
            model: teacherassignedcourse,
          },
        ],
      })
      .then(() => {
        res.send("DELETED"); //Delete Successfully Done
      });
  });
});

/***************************************** UPDATE A TEACHER INFORMATION ******************************************/
router.patch("/:id", async function (req, res) {
  console.log(req.body);
  const { id } = req.params;
  teacherModel
    .update(
      {
        teacher_id: req.body.teacher_id,
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
