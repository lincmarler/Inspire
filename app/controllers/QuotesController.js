import { AppState } from "../AppState.js"
import { quotesService } from "../services/QuotesService.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuote() {
    // console.log('drawing')
    let quote = AppState.quote
    let content = ''
    content += quote.QuoteTemplate
    setHTML('quote', content)

}


export class QuotesController {
    constructor() {
        // console.log('hello form quote controller')
        this.getQuote()
        AppState.on('quote', _drawQuote)
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}