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

function _drawTotal() {
    let totaltoDo = AppState.toDo.length
    setHTML('totaltoDo', totaltoDo)
    // console.log(totalNotes, "totalling")
}

export class ToDoController {
    constructor() {
        AppState.on('user', this.getToDo)
        AppState.on('toDo', _drawToDo)
        AppState.on('toDo', _drawTotal)
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
            const form = window.event.target
            const formData = getFormData(form)
            await toDoService.createTodo(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteList(todoId) {
        try {
            console.log('deleting')
            if (await Pop.confirm("Are you sure you want to delete?")) {
                await toDoService.deleteList(todoId)
            }
        } catch (error) {
            console.error(error)
        }
    }
}