import axios from "axios";

export default class AboutService{
    getAbout(){
        return axios.get("https://localhost:5001/api/Abouts/GetAllAbout")
    }
}