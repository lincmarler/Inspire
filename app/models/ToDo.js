import { generateId } from "../utils/GenerateId.js";

export class ToDo {
    constructor(data) {
        this.id = generateId()
        this.description = data.description
    }

    get ListTemplate() {
        return `<div>
              <input type="checkbox"> ${this.description} <i onclick="app.ToDoController.deleteList(listId)" class="mdi mdi-delete"></i>
            </div>`
    }
}