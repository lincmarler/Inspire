import { generateId } from "../utils/GenerateId.js";

export class ToDo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.complete = false
    }

    get ListTemplate() {
        return `<div>
              <input type="checkbox" onclick=""> ${this.description} <i onclick="app.ToDoController.deleteList('${this.id}')" class="mdi mdi-delete"></i>
            </div>`
    }
}