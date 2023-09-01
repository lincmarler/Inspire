import { AppState } from "../AppState.js"
import { imageService } from "../services/BackgroundImageService.js"

function _drawBackground() {
    // console.log('drawing')
    let background = AppState.BackgroundActive
    document.body.style.backgroundImage = `url(${background.imgUrl}`
}



export class BackgroundImageController {
    constructor() {
        // console.log('hello form controller')
        this.getImage()
        AppState.on('BackgroundActive', _drawBackground)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.error(error)
        }
    }
}