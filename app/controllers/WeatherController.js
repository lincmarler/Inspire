import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { setHTML } from "../utils/Writer.js"



function drawCelsius() {
    let weather = AppState.weather
    let content = ''
    content += weather.CelsiusTemplate
    setHTML('weather', content)
    console.log('drawing weather')
}



export class WeatherController {
    constructor() {
        // console.log('hello from weather')
        this.getWeather()
        AppState.on('weather', drawCelsius)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    drawWeather() {
        // console.log('drawing weather')
        let weather = AppState.weather
        // console.log(AppState.weather)
        let content = ''
        content += weather.WeatherTemplate
        setHTML('weather', content)
    }

    drawCelsius() {
        let weather = AppState.weather
        let content = ''
        content += weather.CelsiusTemplate
        setHTML('weather', content)
        // console.log('drawing weather')
    }
}