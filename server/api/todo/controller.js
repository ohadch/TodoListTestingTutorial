const db = require("../../services/database");

module.exports.get = function (req, res) {
    const { id } = req.params;

    if (id) {
        const todo = db.getTodo(id)
        res.json(todo)
    } else {
        const todos = db.getTodos();
        res.json({todos})
    }
}

module.exports.post = function t(req, res) {
    const { title, description } = req.body;
    const todo = db.addTodo(title, description);
    res.json(todo)
}

module.exports.put = function (req, res) {
    const {id} = req.params;
    const { title, description } = req.body;
    const todo = db.updateTodo(parseInt(id), {title, description});
    res.json(todo)
}

module.exports.delete_ = function (req, res) {
    const { id } = req.params;
    const todo = db.deleteTodo(id);
    res.json(todo)
}