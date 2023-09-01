import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
    console.log('drawing weather')
    let weather = AppState.weather
    console.log(AppState.weather)
    let content = ''
    content += weather.WeatherTemplate
    setHTML('weather', content)
}



export class WeatherController {
    constructor() {
        // console.log('hello from weather')
        this.getWeather()
        AppState.on('weather', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }
}