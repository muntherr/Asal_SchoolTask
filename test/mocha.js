const chai = require("chai");
var should = chai.should();
var assert = require("chai").assert;
var expect = require("chai").expect;
const sequelize = require("sequelize");
const server = require("../app");
const chaiHttp = require("chai-http");
const delay = require("delay");
const t = require("../routes/teacherRoutes");
const erir = t.Error;
//import Error from "../routes/teacherRoutes.js";

// Assertion Style
//chai.expect();
chai.use(chaiHttp);

// Describe the test
describe("API Testing", async () => {
  /**
   * Test the GET Route: This Unit test will check if the teacher GET rout will return the expected output
   */
  // describe("GET /teacher", () => {
  //   it("It should get all the information about the teachers", (done) => {
  //     chai
  //       .request(server)
  //       .get("/teacher")
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("array");
  //         res.body.should.have.lengthOf(4);
  //         done();
  //       });
  //   });
  // });
  /**
   * Test the POST Route
   */
  describe("POST /teacher", () => {
    it("It should ADD a new record to the data base", async (done) => {
      const teachert = {
        teacher_id: Math.floor(Math.random() * 12344) + 1,
        teacher_name: "Mon Qaroush",
        email: "aziz@hotmaddil.com",
        phone: 504443334,
        address: "abu nnngoush",
      };
      await chai
        .request(server)
        .post("/teacher")
        .send(teachert)
        .end((err, res) => {
          //  expect(fails()).to.be.rejectedWith(Error);
          if (err) console.log(`===========================`, err);
          // return done(err, console.log("ERROR!!!!!!!"));
          res.should.have.status(200);
          res.body.should.be.a("object");
          console.log(`==========================>`);
          teachert.should.have.keys("teacher_id");
          expect(teachert).to.equal("null value");
          done();
        });
      // const res = await chai.request(server).post("/teacher").send(teachert);
      // console.log("------------------>", res);
    });
  });

  function binaryParser(res, callback) {
    res.setEncoding("binary");
    res.data = "";
    res.on("data", function (chunk) {
      res.data += chunk;
    });
    res.on("end", function () {
      callback(null, new Buffer(res.data, "binary"));
    });
  }
  // check if the id is null -->
  // describe("API PSOT Testing", () => {
  /**
   * Test the GET Route: This Unit test will check if the teacher GET rout will return the expected output
   */
  /**
   * Test the GET BY ID Route
   */
  /**
   * Test the PATCH Route
   */
  /**
   * Test the DELETE Route
   */
});
