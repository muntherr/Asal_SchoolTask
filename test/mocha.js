const chai = require("chai");
var should = require("chai").should();
var assert = require("chai").assert;
const server = require("../app");
const chaiHttp = require("chai-http");

// Assertion Style
chai.expect();
chai.use(chaiHttp);

// Describe the test
describe("API Testing", () => {
  /**
   * Test the GET Route: This Unit test will check if the teacher GET rout will return the expected output
   */

  describe("GET /teacher", () => {
    it("It should get all the information about the teachers", (done) => {
      chai
        .request(server)
        .get("/teacher")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.should.have.lengthOf(4);
        });
    });
  });
  /**
   * Test the POST Route
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
