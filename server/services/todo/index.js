const DatabaseService = require("../database")

const COLLECTION_TODOS = "todos"

module.exports = class TodoService {

    static getTodos() {
        return DatabaseService.getCollection(COLLECTION_TODOS)
    }

    /**
     *
     * @param {number} id
     * @return {*}
     */
    static getTodo(id) {
        const todos = TodoService.getTodos()
        const todo = todos.find(todo => todo.id === id);

        if (!todo) {
            throw new Error(`Did not find todo with id ${id}`)
        }

        return todo;
    }

    /**
     *
     * @param {string} title
     * @param {string} description
     */
    static addTodo(title, description) {
        const freeId = DatabaseService.getFreeId(COLLECTION_TODOS)
        const content = DatabaseService.read()
        const todo = { id: freeId, title, description }
        content[COLLECTION_TODOS].push(todo)
        DatabaseService.save(content)
        return todo
    }

    /**
     *
     * @param {number} id
     * @param {string} title
     * @param {string} description
     */
    static updateTodo(id, {title, description}) {
        const todo = TodoService.getTodo(id);

        if (title) {
            todo.title = title
        }

        if (description) {
            todo.description = description
        }

        const todos = TodoService.getTodos();
        const idx = todos.map(todo => todo.id).indexOf(id)
        const content = DatabaseService.read();
        content["todos"][idx] = todo

        DatabaseService.save(content)
        return todo;
    }

    /**
     *
     * @param {number} id
     * @param {string} title
     * @param {string} description
     */
    static deleteTodo(id) {
        const todos = TodoService.getTodos();
        const idx = todos.map(todo => todo.id).indexOf(id)
        const content = DatabaseService.read();
        content["todos"].splice(idx, 1)

        DatabaseService.save(content)
    }

}