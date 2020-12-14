const TodoService = require("../../services/todo");

module.exports.getAll = function (req, res) {
    const todos = TodoService.getTodos();
    res.json({todos})
}

module.exports.getOne = function (req, res) {
    const { id } = req.params;
    const todo = TodoService.getTodo(id)
    res.json(todo)
}

module.exports.post = function (req, res) {
    const { title, description } = req.body;
    const todo = TodoService.addTodo(title, description);
    res.json(todo)
}

module.exports.put = function (req, res) {
    const {id} = req.params;
    const { title, description } = req.body;
    const todo = TodoService.updateTodo(parseInt(id), {title, description});
    res.json(todo)
}

module.exports.delete_ = function (req, res) {
    const { id } = req.params;
    const todo = TodoService.deleteTodo(id);
    res.json(todo)
}