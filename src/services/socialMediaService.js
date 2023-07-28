import axios from "axios";

export default class SocialMediaService{
    getSocialMedia(){
        return axios.get("https://localhost:44379/api/SocialMedias/GetAllSocialMedia");
    }
}