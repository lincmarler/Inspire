import { setHTML } from "../utils/Writer.js"


export function drawTime() {

    let time = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })
    let content = ''
    content += time
    setHTML('time', content)
}
