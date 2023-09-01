import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { BackgroundImage } from "../models/BackgroundImage.js";

class BackgroundImageService {
    async getImage() {
        const res = await api.get('/api/images');
        // console.log(res.data);
        AppState.BackgroundActive = new BackgroundImage(res.data)
        // console.log(AppState.BackgroundActive)
    }
}


export const imageService = new BackgroundImageService()