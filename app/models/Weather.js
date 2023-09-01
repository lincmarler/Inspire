export class Weather {
    constructor(data) {
        this.farenheit = ((data.main.temp - 273) * 1.8) + 32
        this.celsius = data.main.temp - 273.15
        this.description = data.weather[0].description
    }

    get WeatherTemplate() {
        return `
<div class="row bg-light">
    <div class="col-12">
        <p>${this.farenheit.toFixed(1)}, ${this.description}</p>
    </div>
</div>`
    }
}
