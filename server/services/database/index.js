const fs = require("fs")
const path = require("path")

const DATABASE_FILE_PATH = path.join(__dirname, "database.json")
const COLLECTION_TODOS = "todos"


module.exports = class DatabaseService {

    static read() {
        const string = fs.readFileSync(DATABASE_FILE_PATH).toString();
        return JSON.parse(string)
    }

    static save(data) {
        const json = JSON.stringify(data)
        return fs.writeFileSync(DATABASE_FILE_PATH, json);
    }

    /**
     *
     * @param {string} collectionName
     * @returns {*}
     */
    static getCollection(collectionName) {
        const content = DatabaseService.read();
        return content[collectionName];
    }

    /**
     *
     * @param {string} collectionName
     * @return {number}
     */
    static getFreeId(collectionName) {
        const documents = DatabaseService.getCollection(collectionName);
        return documents.length > 0
            ? Math.max(...documents) + 1
            : 0
    }

    static getTodos() {
        return DatabaseService.getCollection(COLLECTION_TODOS)
    }

    /**
     *
     * @param {number} id
     * @return {*}
     */
    static getTodo(id) {
        const todos = DatabaseService.getTodos()
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
        const todo = DatabaseService.getTodo(id);

        if (title) {
            todo.title = title
        }

        if (description) {
            todo.description = description
        }

        const todos = DatabaseService.getTodos();
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
        const todos = DatabaseService.getTodos();
        const idx = todos.map(todo => todo.id).indexOf(id)
        const content = DatabaseService.read();
        content["todos"].splice(idx, 1)

        DatabaseService.save(content)
    }

}