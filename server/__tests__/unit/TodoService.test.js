const sinon = require("sinon")
const chai = require("chai");

const TodoService = require("../../services/todo");
const DatabaseService = require("../../services/database");

const expect = chai.expect

describe("TodoService", function () {

    describe("#getTodos", function () {
        it("Should return all the todos", function() {
            const sandbox = sinon.createSandbox();

            sandbox
                .stub(DatabaseService, "getCollection")
                .callsFake(() => [
                    { id: 1, title: "todo 1", description: "todo 1 description" },
                    { id: 2, title: "todo 2", description: "todo 2 description" },
                ])

            const todos = TodoService.getTodos()

            expect(todos).to.have.lengthOf(2)
            expect(todos[0].title).to.equal("todo 1")
        })
    })

})