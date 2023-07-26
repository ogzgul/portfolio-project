import axios from "axios";

export default class AboutService{
    getAbout(){
        return axios.get("https://localhost:44379/api/Abouts/GetAllAbout")
    }
}