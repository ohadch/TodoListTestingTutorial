import React from "react"
import TodoService from "../services/TodoService"
import Todo from "./Todo";

export default class TodoList extends React.Component {
    state = {
        todos: []
    }

    async componentDidMount() {
        const todos = await TodoService.getTodos()
        this.setState({...this.state, todos})
    }

    render() {
        const {todos} = this.state
        return (
            <ul>
                {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
            </ul>
        )
    }


}