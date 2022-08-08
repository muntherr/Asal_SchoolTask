// const client = require("./app");
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server is running");
// });

// client.connect();

// // // Show all student with their courses
// // app.get('/showAllStCo', (req, res) => {
// //     Student.findAll().then()
// //     res.send('select');
// // })

// // -- Show all student with assigned courses.--
// client.query(
//   `SELECT  Student.Student_id, Student.Course_ID,Student.Student_Name,Student.Phone, Student.DOB, Course.Subject_Name
// FROM Student
// INNER JOIN  Course  ON Student.Course_ID = Course.Course_ID; `,
//   (err, result) => {
//     if (!err) {
//       console.log(result.rows);
//     }
//     client.end();
//   }
// );
