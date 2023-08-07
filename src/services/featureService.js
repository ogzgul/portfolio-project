import axios from "axios";

export default class FeatureService{
    getFeature(){
        return axios.get("https://localhost:5001/api/Features/GetAllFeature")
    }
}