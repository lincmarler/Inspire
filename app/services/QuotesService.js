import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Quote } from "../models/Quote.js"



class QuotesService {
    async getQuote() {
        const res = await api.get('/api/quotes')
        // console.log(res.data)
        AppState.quote = new Quote(res.data)
        // console.log(AppState.quote)
    }

}


export const quotesService = new QuotesService()