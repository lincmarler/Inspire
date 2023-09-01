import { AppState } from "../AppState.js"
import { quotesService } from "../services/QuotesService.js"


export class QuotesController {
    constructor() {
        console.log('hello form quote controller')
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}