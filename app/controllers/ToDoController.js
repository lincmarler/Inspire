import { AppState } from "../AppState.js"
import { toDoService } from "../services/ToDoService.js"
import { setHTML } from "../utils/Writer.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "../services/AxiosService.js"
import { Pop } from "../utils/Pop.js"
import { getFormData } from "../utils/FormHandler.js"


function _drawToDo() {
    console.log('drawing todo')
    let toDoList = AppState.toDo
    let content = ''
    toDoList.forEach(list => content += list.ListTemplate)
    setHTML('todo', content)
}

export class ToDoController {
    constructor() {
        this.getToDo()
        AppState.on('toDo', _drawToDo)

    }

    async getToDo() {
        try {
            await toDoService.getToDo()
        } catch (error) {
            console.error(error)
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let fromData = getFormData(form)
            await toDoService.createTodo(formData)
        } catch (error) {
            console.error(error)
        }
    }

    async deleteList(listId) {
        try {
            console.log('deleting')
            if (await Pop.confirm("Are you sure you want to delete?")) {
                await toDoService.deleteList(listId)
            }
        } catch (error) {
            console.error(error)
        }
    }
}