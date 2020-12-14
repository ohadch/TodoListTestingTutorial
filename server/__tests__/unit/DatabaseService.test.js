const sinon = require("sinon")
const db = require("../../services/database");
const chai = require("chai");

const expect = chai.expect

describe("Test Database", function () {

    describe("#getCollection", function () {
        it("Should return the content in the db", function () {
            const sandbox = sinon.createSandbox();
            sandbox.stub(db, "read").callsFake(() => ({todos: []}))
            const collection = db.getCollection("todos");
            expect(collection).to.have.lengthOf(0)
        })
    })

})