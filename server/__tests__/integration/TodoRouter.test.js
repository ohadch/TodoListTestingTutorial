const app = require("../../app");
const request = require("supertest");


describe("Todo Router", function () {
    it("Should return all todos", function () {
        request(app)
            .get('/api/todo')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });
    })
})