import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";
import { setHTML } from "../utils/Writer.js";



class ToDoService {

    async getToDo() {
        console.log('getting todo')
        const res = await api.get(`api/todos`)
        console.log(res.data)
        let toDoList = res.data.map(data => new ToDo(data))
        AppState.toDo = toDoList
    }

    async deleteList(todoId) {
        const res = await api.delete(`api/todos/${todoId}`)
        AppState.toDo = AppState.toDo.filter(todo => todo.id != todoId)
        this.getToDo()
    }

    async setComplete(todoId) {
        const res = await api.get(`api/todos/${todoId}`)
        res.complete = true
        res.complete != res.complete

    }
    async createTodo(formData) {
        const res = await api.post('api/todos', formData)
        res.complete = false
        const newTodo = new ToDo(res.data)
        AppState.toDo.push(newTodo)
        this.getToDo()
    }


}

export const toDoService = new ToDoService()