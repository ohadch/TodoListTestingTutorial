const app = require("../../app");
const request = require("supertest");
const chai = require("chai");


describe("Todo Router", function () {
    it("Should return all todos", function () {
        request(app)
            .get('/api/todo')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                chai.expect(res.body.todos).to.have.lengthOf(1)
            });
    })
})