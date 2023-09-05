import { WeatherController } from "../controllers/WeatherController.js"

export class Weather {
    constructor(data) {
        this.farenheit = ((data.main.temp - 273) * 1.8) + 32
        this.celsius = data.main.temp - 273.15
        this.description = data.weather[0].description
    }

    get WeatherTemplate() {
        return `
<div class="row bg-light">
    <div class="col-12 btn btn-success" onclick="app.WeatherController.drawCelsius()">
        <p>${this.farenheit.toFixed(1)} F, ${this.description}</p>
    </div>
</div>`
    }
    get CelsiusTemplate() {
        return `
<div class="row bg-light">
    <div class="col-12 btn btn-success" onclick="app.WeatherController.drawWeather()">
        <p>${this.celsius.toFixed(1)} C, ${this.description}</p>
    </div>
</div>`
    }
}
