import axios from "axios";

export default class SocialMediaService{
    getSocialMedia(){
        return axios.get("https://localhost:5001/api/SocialMedias/GetAllSocialMedia");
    }
}