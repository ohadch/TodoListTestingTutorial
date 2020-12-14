const todo = require("../../services/todo");

module.exports.get = function (req, res) {
    const { id } = req.params;

    if (id) {
        const todo = todo.getTodo(id)
        res.json(todo)
    } else {
        const todos = todo.getTodos();
        res.json({todos})
    }
}

module.exports.post = function t(req, res) {
    const { title, description } = req.body;
    const todo = todo.addTodo(title, description);
    res.json(todo)
}

module.exports.put = function (req, res) {
    const {id} = req.params;
    const { title, description } = req.body;
    const todo = todo.updateTodo(parseInt(id), {title, description});
    res.json(todo)
}

module.exports.delete_ = function (req, res) {
    const { id } = req.params;
    const todo = todo.deleteTodo(id);
    res.json(todo)
}