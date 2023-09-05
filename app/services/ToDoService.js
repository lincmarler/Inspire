import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDoService {
    async getToDo() {
        console.log('getting todo')
        const res = await api.get(`/api/todos`)
        console.log(res.data)
        let toDoList = res.data.map(data => new ToDo(data))
        AppState.toDo = toDoList
    }

    async deleteList(listId) {
        const res = await api.delete(`/api/todos/${listId}`)
        AppState.toDo = AppState.toDo.filter(todo => todo.id != listId)
    }

    async createTodo(formData) {
        let res = await api.post('/api/todos', formData)
        this.getToDo()
    }
}

export const toDoService = new ToDoService()