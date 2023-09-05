import { ToDo } from './models/ToDo.js'
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {

  /** @type {import('./models/BackgroundImage.js').BackgroundImage | null} */
  BackgroundActive = null

  /** @type {import('./models/ToDo.js').ToDo[]} */
  toDo = []

  /** @type {import('./models/Quote.js').Quote | null}*/
  quote = null

  /** @type {import('./models/Weather.js').Weather | null} */
  weather = null

  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})