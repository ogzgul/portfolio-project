import axios from "axios";

export default class FeatureService{
    getFeature(){
        return axios.get("https://localhost:44379/api/Features/GetAllFeature")
    }
}