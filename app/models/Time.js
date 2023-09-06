export class Time {
    time = Date()

    get TimeTemplate() {
        return ` <h1 class="text-center timeBody text-secondary">⏰${this.time.toLocaleString()}</h1>`
    }
}

function drawTime() {
    let content = ''
    content += time.TimeTemplate
    setHTML('time', content)
}
