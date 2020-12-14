const fs = require("fs")
const path = require("path")

const DATABASE_FILE_PATH = path.join(__dirname, "database.json")

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

}
