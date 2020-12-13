import api from "./ApiService"

export default class TodoService {

    static async addTodo(title, description) {
        return api.post("/todo", {
            title,
            description
        })
    }

    static async editTodo(id, title, description) {
        return api.put(`/todo/${id}`, {
            title,
            description
        })
    }

    static async getTodos() {
        const response = await api.get(`/todo`)
        return response.data.todos
    }

}