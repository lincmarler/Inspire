import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { BackgroundImageController } from "./controllers/BackgroundImageController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { ToDoController } from "./controllers/ToDoController.js";


/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [BackgroundImageController, QuotesController, WeatherController, ToDoController],
    view: /*html*/`
 <div  id="quote"></div>
 <section class="container-fluid text-end">
      <div class="row">
        <div class="col-12">
        <div ><span id="totaltoDo" class="fs-3 bg-light"></span></div>
          <form onsubmit="app.ToDoController.createTodo()">
            <input type="text" name="description" id="description" placeholder="Add ToDo"> <button btn btn-secondary type="submit"><i
                class="mdi mdi-plus-thick"></i></button>
          </form>
          <div id="todo" class="fs-4">

          </div>
        </div>
      </div>
    </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */