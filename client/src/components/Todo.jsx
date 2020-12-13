import React from "react"
import TodoService from "../services/TodoService"

export default class Todo extends React.Component {

    render() {
        const {todo} = this.props;
        return (
            <li>
                <strong>{todo.title}:</strong>{todo.description}
            </li>
        )
    }


}